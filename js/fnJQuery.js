;(function($){
	$.fn.extend({
		cssPlug : function(options) {
			return this.each(function(){
				//插件设置默认值
				//插件参数
				options = $.extend({
					right : "200px",
					background : "red",
					height: "300px"
				}, options);
				//插件代码
				$(this).css({"background":options.background,"width":options.right, "height": options.height});
			});
		}
	});
})(jQuery);