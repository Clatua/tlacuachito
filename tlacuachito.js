const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const PORT = 2403;

server.listen(PORT, ()=> {
  console.log('MQTT server started on port', PORT);
});

aedes.on('client', (client)=> {
  console.log('Client connected:', client.id);
});

aedes.on('clientDisconnect', (client)=> {
  console.log('Client disconnected:', client.id);
});

aedes.on('publish', (packet, client)=> {
  console.log('Received message on topic:', packet.topic, 'with message:', packet.payload.toString());
});