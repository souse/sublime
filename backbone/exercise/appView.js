define(['jquery', 'underscore', 'backbone', 'person', 'mainView'],
		function($, _, Backbone, Person, MainView) {
	return Backbone.View.extend({
		el:'div',
		template: _.template($('#mianMsg').html()),
		events: {
			'click #newName': 'showAddPerson',
			'click div.friends': 'showAddPerson'
		},
		initialize: function() {
			var self = this;
			self.render();
		},
		render: function() {
			$('body').find('div.appMain').append(this.template);
		},
		showAddPerson: function() {
			var self = this;
			//self.mainView = new MainView();
		}
	});
});