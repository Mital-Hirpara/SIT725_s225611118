const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

// Socket connection
io.on('connection', (socket) => {
    console.log('User connected');

    // Notify all users
    io.emit('message', 'A user joined the chat');

    // Receive message
    socket.on('sendMessage', (msg) => {
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        io.emit('message', 'A user left the chat');
    });
});

http.listen(3000, () => {
    console.log('Server running on port 3000');
});