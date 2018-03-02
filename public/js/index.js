// initiating request - making request from client to server to open web socket and keep that connection open.
var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage',message)
});

// 
// socket.emit('createMessage', {
//   from: 'Rob',
//   text: 'haneeeee'
// })
