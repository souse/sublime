define(['jquery', 'underscore', 'backbone', 'person', 'mainView'],
		function($, _, Backbone, Person, MainView) {
	return Backbone.View.extend({
		className: 'appMain',
		events: {
			
		},
		initialize: function() {
			var self = this;
			self.mainView = new MainView();
		},
		render: function() {

		},
	});
});