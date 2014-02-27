Router.map(function () {
	this.route("page_index", {
		path: "/",
		
		before: function () {
		}
	});
});



var form = new AutoForm(PersonCollection);

Template.page_index.loginForm = function () {
	return form;
};

form.hooks({
	onSubmit: function (insertDoc) {
		this.event.preventDefault();
		var id = PersonCollection.insert(insertDoc);
		Router.go("page_tasks", { _person: id });
	}
});
