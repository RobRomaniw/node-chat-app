const path = require('path'),
      http = require('http'),
      express = require('express'),
      socketIO = require('socket.io'),
      publicPath = path.join(__dirname, '../public'),
      port = process.env.PORT || 3000;

var app = express(),
    server = http.createServer(app),
    io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit('newMessage', {
    from: 'Jon',
    text: 'Whatup Blood',
    createdAt: 12142
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
  });

  socket.on('disconnect', () => {
    console.log('client disconnected')
  })
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`)
})
