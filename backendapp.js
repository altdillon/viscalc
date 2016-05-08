var express = require('express');
var app = express();

//set the static content for loading shit from the frount end.
app.use(express.static('web_app'));


app.get("/hello",function(req,res){
  res.send("hello to you!");
});

app.listen(8888,function(){
  console.log("started listening on port 3000");
});
