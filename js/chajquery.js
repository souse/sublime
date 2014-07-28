;(function($) {
	//标准写法
	$.fn.extend({
		//插件名称
		jQueryPlug:function(options){
			// 插件匹配多个元素,并且返回this，使方法可链
			return this.each(function(){
				//插件设置默认值
				options.extend({
					//参数

					//参数end
				}, options);
				// 插件代码

                // end-----插件代码
			});
		}
	});
	//封装对象方法的插件
	$.extend({
		ltrim: function(args) {
			return (args || "").replace(/^\s+/g,"");
		},
		rtrim: function rtrim(args) {
			return (args || "").replace(/^\s+/g,"");
		}
	});
})(jQuery);
