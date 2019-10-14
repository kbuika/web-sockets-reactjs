// importing socket.io-client for client side
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

// creating a function that can be called to emit the subscribeToTimer event...
//... server and feed back the results of the timer event to the consuming code

function subscribeToTimer(cb) {
    // subscribing to the timer event coming from the server and then emit the subscribeToTimer
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);

}

export { subscribeToTimer };