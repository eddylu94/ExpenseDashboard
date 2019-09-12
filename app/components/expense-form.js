import Component from '@ember/component';

const ENTER_KEY = "Enter";

export default Component.extend({
	actions: {
		onInput(event) {
			this.update(event.target.id, event.target.value);
		},

		addExpense() {
			this.add();
		},

		enterHandler(event) {
			if (event.key === ENTER_KEY) {
				this.add();
			};
		}
	}
});
