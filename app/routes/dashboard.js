import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return ['Dinner at Rhein Haus', 'Gas', 'Groceries'];
  }
});
