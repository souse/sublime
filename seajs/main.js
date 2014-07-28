seajs.config({
	alias: {
		'jquery': '../js/jquery-1.10.2',
		'action': 'sea-1'
	}
});

seajs.use(['action'], function(action) {
	action.init();
});