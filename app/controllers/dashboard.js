import Controller from '@ember/controller';

const MODEL_DESCRIPTION_INPUT_VALUE = "model.descriptionInputValue";
const MODEL_COST_INPUT_VALUE = "model.costInputValue";

const COST_ID = "cost";
const DESCRIPTION_ID = "description";

const getModelInputKey = (id) => {
	switch (id) {
		case COST_ID:
			return MODEL_COST_INPUT_VALUE;
		case DESCRIPTION_ID:
		default:
			return MODEL_DESCRIPTION_INPUT_VALUE;
	}
};

export default Controller.extend({
  actions: {
		onInput(id, value) {
			const key = getModelInputKey(id);
			this.set(key, value);
		},

		addExpense() {
			const descriptionInputValue = this.get(MODEL_DESCRIPTION_INPUT_VALUE);
			const costInputValue = this.get(MODEL_COST_INPUT_VALUE);

			if (descriptionInputValue && !isNaN(costInputValue)) {
				this.model.expenses.pushObject({
					description: descriptionInputValue,
					cost: parseFloat(costInputValue).toFixed(2)
				});
				this.set(MODEL_DESCRIPTION_INPUT_VALUE, "");
				this.set(MODEL_COST_INPUT_VALUE, "");
			}
		}
	}
});