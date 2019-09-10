import Component from '@ember/component';

export default Component.extend({
	actions: {
		printExpense(expense) {
			console.log(expense);
		}
	}
});
