var mallsJSON = require('../malls.json');

//Home
exports.home = function(req, res){

	var malls = mallsJSON.malls;

	res.render('home', {
		title: "Malls in Kenya",
		malls: malls
	});
};

exports.mall_single = function(req, res){
	var mall_name = req.params.mall_name;
	res.send("This is the page for " + mall_name + " mall");
};


//Not Found
exports.notFound = function(req, res){
	res.send("This is not the page you are looking for");
};