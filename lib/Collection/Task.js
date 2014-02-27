TaskCollection = new Meteor.Collection("Task", {
	schema: new SimpleSchema({
		"owner": {
			type: String,
			max: 32
			//denyUpdate: true
		},
		"num": {
			type: Number
			//denyUpdate: true
		},
		"input": {
			label: "Eingabe",
			type: String,
			max: 60,
			optional: true
		},
		"success": {
			type: Boolean,
			optional: true
		}
	})
});

TaskCollection.helpers({
	regex: function (modifier) {
		return new RegExp(this.input, modifier || "");
	}
});

TaskCollection.findByPerson = function (personId) {
	return TaskCollection.find({ owner: personId });
};

TaskCollection.findSpecific = function (num, personId) {
	return TaskCollection.find({ owner: personId, num: num }, { limit: 1 });
};

if (Meteor.isClient) {
	TaskCollection.current = function (num) {
		return TaskCollection.findSpecific(num, Session.get("task_person_id")).fetch()[0];
	};
}

TaskCollection.allow({
	insert: function (userId, doc) {
		return PersonCollection.findOne(doc.owner) != null
	},
	update: function (userId, doc, fieldNames, modifier) {
		// FIXME: hack to have the regex method
		var modDoc = modifier.$set;
		modDoc.regex = function () { return new RegExp(this.input) };
		try {
			var results = Task[doc.num].computeList(modDoc);
			for (var i = 0; i < results.length; ++i) {
				if (!results[i].equals) {
					throw Error(); // count this as error
				}
			}

			modifier.$set.success = true;
		} catch (e) {
			modifier.$set.success = false;
		}
		return PersonCollection.findOne(doc.owner) != null
	},
	remove: function (userId, doc) { return false }
});
