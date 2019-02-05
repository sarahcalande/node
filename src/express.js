var express = require('express');
var app = express();
var mongoose = require('mongoose');

var server = app.listen(3000, () => {
 console.log('server is running on port', server.address().port);
});

app.use(express.static(__dirname));


var mongoose = require('mongoose');

mongoose.connect(dbUrl , (err) => {
   console.log('mongodb connected',err);
})

var Message = mongoose.model('Message',{ name : String, message : String})


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', () =>{
 console.log('a user is connected')
})
