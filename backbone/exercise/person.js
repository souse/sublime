define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.Model.extend({
		url: '',
		defaults: {
			name: '',
			mobileNo: '',
			email: ''
		}
	});
});