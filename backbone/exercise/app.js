define(['jquery', 'underscore', 'backbone', 'appRouter'],
		function($, _, Backbone, AppRouter) {
	return {
		initialize: function() {
			window.appRouter = new AppRouter();
			Backbone.history.start();
		}
	};
});