import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return {
			expenses: [
				{
					description: 'Dinner at Rhein Haus',
					cost: "23.72"
				},
				{
					description: 'Gas',
					cost: "40.00"
				},
				{
					description: 'Groceries',
					cost: "19.15"
				}
			],
			descriptionInputValue: "",
			costInputValue: ""
		};
	}
});
