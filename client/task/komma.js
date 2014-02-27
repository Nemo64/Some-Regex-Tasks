Template.task_komma.task = function () {
	return TaskCollection.current(KommaTask.TASK_NUM);
};

Template.task_komma.results = function () {
	return KommaTask.computeList(TaskCollection.current(KommaTask.TASK_NUM));
};

Template.task_komma.inputError = function () {
	var task = TaskCollection.current(KommaTask.TASK_NUM);
	if (task != null) try {
		task.regex();
	} catch (e) {
		return e.toString();
	}
};





var form = new AutoForm(TaskCollection);
form.hooks({
	formToDoc: function (task) {
		task.num = KommaTask.TASK_NUM;
		task.owner = Session.get("task_person_id");
		return task;
	},
	onSubmit: function (insertDoc, updateDoc, currentDoc) {
		if (currentDoc == null) {
			TaskCollection.insert(insertDoc);
		} else {
			TaskCollection.update(currentDoc._id, updateDoc);
		}
		return false;
	},
	onError: console.error.bind(console)
});

Template.task_komma.form = function () {
	return form;
};
Template.task_komma.list = function () {
	return KommaTask.KOMMA_LIST;
};
