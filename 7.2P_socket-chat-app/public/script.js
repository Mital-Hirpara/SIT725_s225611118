const socket = io();

socket.on('message', (msg) => {
    const div = document.getElementById('messages');
    const p = document.createElement('p');
    p.innerText = msg;
    div.appendChild(p);
});

function sendMessage() {
    const input = document.getElementById('msgInput');
    
    // Show your own message differently
    const div = document.getElementById('messages');
    const p = document.createElement('p');
    p.innerText = "You: " + input.value;
    div.appendChild(p);

    socket.emit('sendMessage', input.value);
    input.value = '';
}