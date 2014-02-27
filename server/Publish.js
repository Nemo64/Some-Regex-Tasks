Meteor.publish("person", function (id) {
	return [
		PersonCollection.find(id),
		TaskCollection.findByPerson(id)
	];
});

Meteor.publish("personOverview", function () {
	return [
		PersonCollection.find({}),
		TaskCollection.find({})
	];
});
