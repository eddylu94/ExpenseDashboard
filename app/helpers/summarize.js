import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([expenses]) {
		if (expenses) {
			const map = {};
			expenses.forEach(expense => {
				const category = expense.category;
				if (map[category] !== undefined) {
					map[category] += parseFloat(expense.cost);
				}
				else {
					map[category] = parseFloat(expense.cost);
				}
			});
			
			const keys = Object.keys(map);
			const list = keys.map(key => {
				return {
					category: key,
					cost: map[key].toFixed(2)
				};
			});
			list.sort((a, b) => b.cost - a.cost);
			return list;
		}
		return [];
	}
});