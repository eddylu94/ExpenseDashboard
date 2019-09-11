import Component from '@ember/component';

export default Component.extend({
	actions: {
		onChange(event) {
			this.update(event.target.value);
		},

		addExpense(expense) {
			this.add(expense);
		}
	}
});
