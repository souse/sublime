define(['jquery', 'underscore', 'backbone', 'person'], function($, _, Backbone, Person) {
	return Backbone.Collection.extend({
		model: Person
	});
});