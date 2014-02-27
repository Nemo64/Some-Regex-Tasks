PersonCollection = new Meteor.Collection("Person", {
	schema: new SimpleSchema({
		"name": {
			label: "name (optional)",
			type: String,
			min: 3,
			max: 30,
			optional: true,
			regEx: /[\w ]+/
		}
	})
});

if (Meteor.isServer) {
	PersonCollection.allow({
		insert: function () { return true },
		update: function () { return true },
		remove: function () { return false }
	});
}
