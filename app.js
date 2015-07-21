/**
 * Created by thangnv on 7/20/15.
 */
var app = require('express')();
var qs = require('querystring');

var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
nunjucks.configure('views',{
    autoescape : true,
    express : app
})

app.use(function (req,res,next) {
    if (req.method == 'POST') {
        var content = '';
        req.on('data', function (data) {
            content += data;
        });
        req.on('end', function () {
            req.body = qs.parse(content);
            next();
        });
    }else{
        next();
    }

});
app.get('/', function (req,res) {
    res.render('index.html');
})
app.post('/', function (req,res) {
    res.json(req.body)
    //res.render('hello.html',{data : req.body});
})
app.listen(2222, function () {
    console.log('Server is running ...');
})