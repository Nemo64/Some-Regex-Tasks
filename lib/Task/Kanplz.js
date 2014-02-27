KanplzTask = Task[3] = {
	TASK_NUM: 3,
	PLZ: ["B6Z 4Z2", "A2K3B1", "453 797", "BKLSTA", "67A 4Z3", "V9V  7H9", "J4P", "K2B 7O9 L5A"],
	PLZ_TEST_REGEX: /^[A-Z]\d[A-Z]\s*?\d[A-Z]\d$/,

	computeList: function (task) {
		var result = [];
	
		for (var i = 0; i < KanplzTask.PLZ.length; ++i) {
			var plz = KanplzTask.PLZ[i];
			var compare = plz.match(KanplzTask.PLZ_TEST_REGEX) || [];
			
			if (task != null) try {
				var results = plz.match(task.regex()) || [];
				
				result.push({
					initial: false,
					shouldFail: compare.length == 0,
					equals: results[0] == compare[0],
					result: JSON.stringify(results),
					compare: JSON.stringify(compare),
					origin: plz
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
				origin: plz
			});
		}
	
		return result;
	}
	
};
