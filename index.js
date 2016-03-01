const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

const redis = require('redis')
const client = redis.createClient({url: 'redis://redistogo:3805a789315052d7d42ccb336834e7ef@tench.redistogo.com:9048/'});

client.subscribe("community");

client.on("message", function (channel, message) {
  console.log(channel, message);
});

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// io.on('connection', function (socket) {

//   var interval = setInterval(function () {
//     socket.emit('tswift', {user: 'turingbot', text: 'I like to shake it off.'});
//   }, 1000);

//   socket.on('message', function (channel, message) {
//     console.log(channel + ':', message);
//   });

//   socket.on('disconnect', function () {
//     clearInterval(interval);
//   });
// });

io.on('connection', function(socket) {
  socket.on('gamenight', function (message) {
    console.log(message);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
