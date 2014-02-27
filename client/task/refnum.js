Template.task_refnum.task = function () {
	return TaskCollection.current(RefnumTask.TASK_NUM);
};

Template.task_refnum.results = function () {
	return RefnumTask.computeList(TaskCollection.current(RefnumTask.TASK_NUM));
};

Template.task_refnum.inputError = function () {
	var task = TaskCollection.current(RefnumTask.TASK_NUM);
	if (task != null) try {
		task.regex();
	} catch (e) {
		return e.toString();
	}
};





var form = new AutoForm(TaskCollection);
form.hooks({
	formToDoc: function (task) {
		task.num = RefnumTask.TASK_NUM;
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

Template.task_refnum.form = function () {
	return form;
};

