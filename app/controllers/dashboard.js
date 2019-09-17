import Controller from '@ember/controller';

const MODEL_DESCRIPTION_INPUT_VALUE = "model.descriptionInputValue";
const MODEL_COST_INPUT_VALUE = "model.costInputValue";
const MODEL_CATEGORY_SELECT_VALUE = "model.categorySelectValue";
const MODEL_SUBMIT_DISABLED = "model.isSubmitDisabled";

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
	isSubmitDisabled: function() {
		const descriptionInputValue = this.get(MODEL_DESCRIPTION_INPUT_VALUE);
		const costInputValue = this.get(MODEL_COST_INPUT_VALUE);
		const categoryValue = this.get(MODEL_CATEGORY_SELECT_VALUE);
	
		return !(descriptionInputValue && categoryValue && costInputValue > 0);
	},

  actions: {
		onInput(id, value) {
			const key = getModelInputKey(id);
			this.set(key, value);
			this.set(MODEL_SUBMIT_DISABLED, this.isSubmitDisabled());
		},

		onSelect(selection) {
			this.set(MODEL_CATEGORY_SELECT_VALUE, selection);
			this.set(MODEL_SUBMIT_DISABLED, this.isSubmitDisabled());
		},

		addExpense() {
			const descriptionInputValue = this.get(MODEL_DESCRIPTION_INPUT_VALUE);
			const costInputValue = this.get(MODEL_COST_INPUT_VALUE);
			const categoryValue = this.get(MODEL_CATEGORY_SELECT_VALUE);

			const isDisabled = this.isSubmitDisabled();
			if (!isDisabled) {
				this.model.expenses.pushObject({
					description: descriptionInputValue,
					category: categoryValue,
					cost: parseFloat(costInputValue).toFixed(2)
				});
				this.set(MODEL_DESCRIPTION_INPUT_VALUE, "");
				this.set(MODEL_COST_INPUT_VALUE, "");
				this.set(MODEL_SUBMIT_DISABLED, true);
			}
		}
	}
});