//import and construct the socket
const io = require('socket.io')();

// Websockets are long running duplex channels between the client and server
//  the most important thing to do on the server is to handle a connection...
//  ... of a client so that you can publish events to that client
io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

// telling socket.io to start listening for clients
const port = 8000;
io.listen(port);
console.log('listening on port ', port)

// start your server by running "node server" in the terminal