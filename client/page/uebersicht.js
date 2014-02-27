Router.map(function () {
	this.route("page_uebersicht", {
		path: "/list",
		
		before: function () {
			this.subscribe("personOverview").wait();
		}
	});
});

Template.page_uebersicht.tasks = function (personId) {
	var tasks = [];
	for (var i = 3; i >= 1; --i) {
		tasks.push(TaskCollection.findSpecific(i, personId).fetch()[0]);
	}
	console.log(tasks);
	return tasks;
};

Template.page_uebersicht.taskInput = function (personId, num) {
	var task = TaskCollection.findSpecific(num, personId).fetch()[0];
	return task != null ? task.input : "";
};

Template.page_uebersicht.persons = function () {
	return PersonCollection.find();
};

Template.page_uebersicht.events({
	"click [data-kill]": function (e) {
		e.preventDefault();
		Meteor.call("removeUser", e.target.getAttribute("data-kill"));
	}
});
