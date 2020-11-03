const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;

const server = express().listen(3000, () => {
    console.log('Server started at 3000..');
});

const wss = new SocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);          
        }
      })
    })
  })
