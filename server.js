var exp = require("express");
var app = exp();

app.set('view engine', 'ejs');



app.get('/','routes.js');


app.get('/:city', handlers.cityFn);

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening on port "+port);
});