define(['jquery', 'underscore', 'backbone', 'appRouter', 'db'],
		function($, _, Backbone, AppRouter) {
	return {
		initialize: function() {
			var win = window,
				person_table = 'create table if not exists person (id REAL UNIQUE, name TEXT, sex TEXT, email TEXT)',
				options = {
					dbName: 'backbone',//数据库名
					dbVersion: '1.0',//版本信息
					dbDescription: 'add person',//描述
					dbMaxSize: 1024*1024*1024,//最大值
					dbObj: null
				};

			win.PersonDB = new LOCAL.LocalDB(options);
			win.PersonDB.openDB();//创建本地数据库
			win.PersonDB.executeSqlDefault(person_table, []);

			win.appRouter = new AppRouter();
			Backbone.history.start();

			/**
				window.PersonDB.executeSqlDefault('select * from person', [], function(){console.log('success')}, function(){console.log('error')});

				window.PersonDB.executeSqlDefault('insert into person values(1,"王五", "男", "1234@qq.com")', [], function(){console.log('success')}, function(){console.log('error')});
			/
		}
	};
});