import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
		onChange(value) {
			this.set("model.inputValue", value);
		},

		addExpense(expense) {
			this.model.expenses.pushObject(expense);
		}
	}
});