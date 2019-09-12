import Controller from '@ember/controller';

const MODEL_INPUT_VALUE = "model.inputValue";

export default Controller.extend({
  actions: {
		onInput(value) {
			this.set(MODEL_INPUT_VALUE, value);
		},

		addExpense() {
			const inputValue = this.get(MODEL_INPUT_VALUE);
			if (inputValue) {
				this.model.expenses.pushObject(inputValue);
				this.set(MODEL_INPUT_VALUE, "");
			}
		}
	}
});