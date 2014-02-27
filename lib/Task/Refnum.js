RefnumTask = Task[2] = {
	TASK_NUM: 2,
	REFNUM: ["42345", "5431", "171a3", "567 8", "4932", "56938", "523427", "1", "33214", "14567", "rate"],
	REFNUM_TEST_REGEX: /^[145]\d{4}$/,

	computeList: function (task) {
		var result = [];
	
		for (var i = 0; i < RefnumTask.REFNUM.length; ++i) {
			var refnum = RefnumTask.REFNUM[i];
			var compare = refnum.match(RefnumTask.REFNUM_TEST_REGEX) || [];
			
			if (task != null) try {
				var results = refnum.match(task.regex()) || [];
				
				result.push({
					initial: false,
					shouldFail: compare.length == 0,
					equals: results[0] == compare[0],
					result: JSON.stringify(results),
					compare: JSON.stringify(compare),
					origin: refnum
				});
				continue;
				
			} catch (e) {}
			
			// this will only be added if no result came from the task.
			result.push({
				initial: true,
				shouldFail: compare.length == 0,
				equals: false,
				result: "",
				compare: JSON.stringify(compare),
				origin: refnum
			});
		}
	
		return result;
	}
	
};
