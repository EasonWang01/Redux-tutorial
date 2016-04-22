var mongoose = require('mongoose');

module.exports = { 

	connect:function(){

			mongoose.connect('mongodb://yicheng:29114055@ds013981.mlab.com:13981/yicheng',function(err){
				if(err){throw err};
			});
			var db = mongoose.connection;
			db.on('error', console.error.bind(console, 'connection error:'));
			db.once('open', function() {
			  console.log("connect mongo")
			});


		},
	saveCat:function(){
		
			var Cat = mongoose.model('Cat', {
			  name: String,
			  friends: [String],
			  age: Number,
			});
			var kitty = new Cat({ name: 'Zildjian', friends: ['tom', 'jerry']});
			kitty.age = 3;
			kitty.save(function (err) {
			  if (err) // ...
			  console.log('meow');
			});
	}

}
