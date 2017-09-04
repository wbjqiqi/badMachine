/**
 * Created by Administrator on 2017/8/28 0028.
 */
var express = require('express');
var app = express();

app.set('views','./text')
app.set('view engine','ejs')

app.use(express.static('./public',{
  maxAge: '0',
  etag:true
}))

app.get('/',function (req,res){
  res.render('text');
})

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s',host,port);
})
