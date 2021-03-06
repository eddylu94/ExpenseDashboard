import Route from '@ember/routing/route';
import { Category } from './../helpers/enums';

export default Route.extend({
	model() {
    return {
			expenses: [
				{
					description: 'Dinner at Rhein Haus',
					category: Category.FoodDrinks,
					cost: "23.72"
				},
				{
					description: 'Gas',
					category: Category.Gas,
					cost: "40.00"
				},
				{
					description: 'Flour',
					category: Category.Groceries,
					cost: "1.89"
				},
				{
					description: 'Drinks at Redhook Brewery',
					category: Category.FoodDrinks,
					cost: "29.51"
				},
				{
					description: 'Gas',
					category: Category.Gas,
					cost: "30.00"
				},
				{
					description: 'Eggs',
					category: Category.Groceries,
					cost: "3.49"
				}
			],
			descriptionInputValue: "",
			costInputValue: "",
			categorySelectValue: "",
			options: Object.values(Category),
			isSubmitDisabled: true
		};
	}
});
