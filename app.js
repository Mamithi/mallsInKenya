var express = require('express');

var app = express();

app.set('view engine', 'ejs');


var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//Home
app.get('/', routes.home);

app.get('/malls/:mall_name?', routes.mall_single);

//Not Found
app.get('*', routes.notFound);

app.listen(3000, function(){
	console.log("application listening in port 3000");
})