KommaTask = Task[1] = {
	TASK_NUM: 1,
	KOMMA_LIST: "Max, Peter , Herbert, Mario,Luigi, James ,Bond, Aabid, Aaden, Aadil,Aapo, Aaran , Aarón, Aaren  ,  Aaro, Aaron, Aatu, Aëtios, Abbondio,   Abd Allah, Abd-al-Qadir",
	KOMMA_TEST_REGEX: /\s*,\s*/,
	
	computeList: function (task) {
		var result = [];
		if (task == null) {
			return result;
		}
	
		var results = KommaTask.KOMMA_LIST.split(task.regex());
		var compare = KommaTask.KOMMA_LIST.split(KommaTask.KOMMA_TEST_REGEX);
	
		for (var i = 0; i < results.length; ++i) {
			result.push({
				equals: results[i] == compare[i],
				result: results[i],
				compare: compare[i]
			});
		}
	
		return result;
	}
};
