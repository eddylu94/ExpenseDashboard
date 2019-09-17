import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([expenses]) {
		if (expenses) {
			return expenses.reduce((acc, curr) => acc += parseFloat(curr.cost), 0);
		}
		return 0;
	}
});