define(['jquery', 'underscore', 'backbone', 'person', 'text!detail.html'],
		function($, _, Backbone, Person, partial) {
	return Backbone.View.extend({
		className: 'appMain',
		template: _.template(partial),
		events: {

		},
		initialize: function() {
			var self = this;
			//alert(self.seachId);
			self.render();
		},
		render: function() {
			this.$el.html(this.template());
		}
	});
});