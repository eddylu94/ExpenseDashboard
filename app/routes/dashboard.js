import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return {
			expenses: ['Dinner at Rhein Haus', 'Gas', 'Groceries']
		};
	}
});
