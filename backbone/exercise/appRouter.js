define(['jquery', 'underscore', 'backbone', 'appView', 'persons', 'mainView'],
		function($, _, Backbone, AppView, Persons, MainView) {
	return Backbone.Router.extend({
		routes: {
			'detail/:id': 'showDetail',
			'add': 'showDetail'
		},
		initialize: function() {
			var self = this, persons = new Persons();
			self.appView = new AppView({model: persons});
		},
		showDetail: function(id) {
			var self = this;
			self.mainView = new MainView({seachId: id});
		}
	});
});