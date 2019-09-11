import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
		addExpense(expense) {
			this.model.expenses.pushObject(expense);
		}
	}
});