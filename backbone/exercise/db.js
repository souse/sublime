//********************************
//****Html5 管理本地数据库脚本****
//********************************
var LOCAL = window.LOCAL || {}, win = window;

LOCAL.LocalDB = function(options){
	this.opts = $.extend({}, LOCAL.defaults, options);
	console.log(this.opts);
}
LOCAL.LocalDB.prototype = {
	//打开数据库
	openDB: function() {
		var self = this, options = self.opts;
		try{
			if(!options.dbObj) {
				options.dbObj = win.openDatabase(options.dbName, options.dbVersion,
											options.dbDescription, options.dbMaxSize);
				console.log(options.dbName + '数据库创建成功...');
			}
		}catch(e){
			console.log("打开数据库出现未知错误： " + e);
        	options.dbObj = null;
		};
	},
	//连接数据库
	getDBConn: function() {
		this.openDB();
	},
	//默认执行sql方式
	executeSqlDefault: function(sqlStr, params, successHandler, errorHandler) {
		var self = this, options = self.opts;
		this.getDBConn();
		options.dbObj.transaction(function(tx){
			tx.executeSql(sqlStr, params, successHandler, errorHandler);
		}, null, null);

	},
	//自定义sql函数执行
	executeSqlTrans: function(fun, successHandler, errorHandler) {
		var self = this, options = self.opts;
		this.getDBConn();
		options.dbObj.transaction(fun, successHandler, errorHandler);
	},
	//修改数据库版本信息
	changeDBVersion: function(newVersion) {
		var self = this, options = self.opts;
		this.getDBConn();
		options.dbObj.changeVersion(options.dbVersion, newVersion, null, errorFun, null);
	},
	//判断某表是否存在：表名、存在回调函数、不存在回调函数
	isExitTable: function(tableName, exitFun, notExitFun) {
		var self = this, options = self.opts,
			sql = "select * from sqlite_master where type='table' and name = ?";
		this.getDBConn();
		options.dbObj.transaction(function(tx) {
			tx.executeSql(sql, [tableName], function(transaction, result) {
				if (result.rows.length > 0 && exitFun) {
                    exitFun.call();
                } else if (result.rows.length <= 0 && notExitFun) {
                    notExitFun.call();
                }
			}, null);
		});
	},
	 //删除表数据：表名，删除成功回调函数
	 delTableData: function(tableName, callBackFun) {
	 	var self = this, options = self.opts,
	 		sql = 'delete form ?'
		this.getDBConn();
		options.dbObj.transaction(function(tx) {
			tx.executeSql(sql, [tableName], callBackFun, null);
		});
	 },
	 //删除表，删除成功回调函数
	 dropTable: function(tableName, callBackFun) {
	 	var self = this, options = self.opts,
	 		sql = 'drop table ?'
		this.getDBConn();
		options.dbObj.transaction(function(tx) {
			tx.executeSql(sql, [tableName], callBackFun, null);
		});
	 }
};
LOCAL.defaults = {
	dbName: 'book',//数据库名
	dbVersion: '1.0',//版本信息
	dbDescription: 'just test',//描述
	dbMaxSize: 1024*1024*1024,//最大值
	dbObj: null
}