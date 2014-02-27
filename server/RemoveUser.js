Meteor.methods({
	"removeUser": function (userId) {
		PersonCollection.remove(userId);
		TaskCollection.remove({ owner: userId });
	}
});
