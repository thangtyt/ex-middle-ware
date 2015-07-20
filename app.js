/**
 * Created by thangnv on 7/20/15.
 */
var app = require('express')();


var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
nunjucks.configure('views',{
    autoescape : true,
    express : app
})
app.set('view engine','html');
app.use(bodyParser.urlencoded());
app.get('/', function (req,res) {
    res.render('index.html');
})
app.post('/', function (req,res) {
    console.log(req.body);
    var data = req.body;
    res.render('hello.html',{data : data});
})
app.listen(2222, function () {
    console.log('Server is running ...');
})