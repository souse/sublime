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
			window.PersonDB.executeSqlDefault('select * from person', [], this.showDB, function(){console.log('error')});
		},
		showAddPerson: function(e) {
			var self = this, id = $(e.currentTarget).data('id');
			if(id) {
				Backbone.history.navigate('detail/'+ id, {trigger: true});
			} else {
				Backbone.history.navigate('add', {trigger: true});
			}
		},
		showDB: function(tx, rs) {
			var htm = '';
			for(var i = 0; i < rs.rows.length; i++) {
				var obj = rs.rows.item(i);
				htm += '<div class="friends" data-id="'+obj.id+'"><span>'+obj.name+'</span></div>';
			}
			$('.names-info').append(htm);
		}
	});
});