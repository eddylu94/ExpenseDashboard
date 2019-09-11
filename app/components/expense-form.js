import Component from '@ember/component';

export default Component.extend({
	actions: {
		addExpense(expense) {
			this.add(expense);
		}
	}
});
