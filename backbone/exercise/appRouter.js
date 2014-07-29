define(['jquery', 'underscore', 'backbone', 'appView', 'persons'],
		function($, _, Backbone, AppView, Persons) {
	return Backbone.Router.extend({
		routes: {
		},
		initialize: function() {
			var self = this, persons = new Persons();
			self.appView = new AppView({model: persons});
		},
	});
});