var socket = io();

// socket.on('connect', function () {
//   console.log('You have connected!');
//   socket.send('tswift', {
//     username: 'yournamehere',
//     text: 'I did the thing.'
//   });
// });

socket.on('connect', function(){
	console.log('Connected!');
	socket.emit('gamenight', {
		username: 'taylor',
		text: 'I danced'
	});
});
