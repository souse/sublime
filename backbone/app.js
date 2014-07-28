define(['jquery', 'backbone'], function($, Backbone) {
	return function() {
		var object = {};
		_.extend(object, Backbone.Events);

		function showMsg(msg){
			document.write('Triggered: ' + msg);
		}
		object.on('alert click', showMsg);

		object.off('alert', showMsg);
		//object.off(); //移除全部绑定事件

		object.trigger('alert', 'this is alter...');
		object.trigger('click', 'this is click...');




















		/*Function.prototype.myCall = function(obj) {
			var args = Array.prototype.slice.call(arguments, 1);
			return this.apply(obj, args);
		}

		function f1() {
			console.log(1);
		}

		function f2() {
			console.log(2)
		}
		f1.myCall(f2);　　 //1　　相当于: f1.apply(f2);
		f1.myCall.myCall(f2);　*/　 //2　　相当于: Function.prototype.myCall.myCall(f2); 相当于: Function.prototype.myCall.apply(f2); 相当于: f2.apply(); 相当于f2();
	}



	/*return function(){
		var Book = Backbone.Model.extend({
		default: {
			title: 'default'
		},
		initialize: function() {
			document.write('you have create me!');
		}
		});

		var BookShelf = Backbone.Collection.extend({
			model: Book
		});

		var book1 = new Book({title: 'book1'});
		var book2 = new Book({title: 'book2'});
		var book3 = new Book({title: 'book3'});

		var bookShelf = new BookShelf();
		bookShelf.add(book1);
		bookShelf.add(book2);
		bookShelf.add(book3);

		bookShelf.remove(book3);

		bookShelf.each(function(book) {
			document.write(book.get('title') + '___');
		});
	}*/
});