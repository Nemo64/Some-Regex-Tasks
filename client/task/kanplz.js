Template.task_kanplz.task = function () {
	return TaskCollection.current(KanplzTask.TASK_NUM);
};

Template.task_kanplz.results = function () {
	return KanplzTask.computeList(TaskCollection.current(KanplzTask.TASK_NUM));
};

Template.task_kanplz.inputError = function () {
	var task = TaskCollection.current(KanplzTask.TASK_NUM);
	if (task != null) try {
		task.regex();
	} catch (e) {
		return e.toString();
	}
};





var form = new AutoForm(TaskCollection);
form.hooks({
	formToDoc: function (task) {
		task.num = KanplzTask.TASK_NUM;
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

Template.task_kanplz.form = function () {
	return form;
};
