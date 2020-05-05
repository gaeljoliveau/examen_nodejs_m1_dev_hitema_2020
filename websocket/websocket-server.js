const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });

let messageHystory = [];
  
webSocketServer.on('connection', webSocket => {
    
    webSocket.send(JSON.stringify(messageHystory));


    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        messageHystory.push(message);
        console.log(messageHystory);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    };
});

module.exports = webSocketServer;
