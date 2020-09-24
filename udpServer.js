const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const PORT = 8080;
const HOST = '192.168.1.61';

server.on('listening', function () {
    let address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

//Pointen her er at den skal eksekverer, når den har modtaget beskeden på serversiden. Her skal der ligelides
//laves en error, så vi ved hvis beskeden ikke er modtaget. Men den kører slet ikke den her server.on :D
server.on('message', function (data, remote) {
    let message = Buffer.from("Beskeden er modtaget");
    console.log(remote.address + ':' + remote.port +' - ' + data);
    server.send(message, 0, message.length, remote.port, remote.address)
});

server.bind(PORT, HOST);