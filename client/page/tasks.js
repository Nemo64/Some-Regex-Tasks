Router.map(function () {
	this.route("page_tasks", {
		path: "/tasks/:_person",
		
		before: function () {
			personId = this.params._person;
			Session.set("task_person_id", personId);
			this.subscribe("person", personId).wait();
		}
	});
});
