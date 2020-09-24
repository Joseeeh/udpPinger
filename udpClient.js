const HOST = '192.168.1.61';
const PORT = 8080;
const udp = require('dgram');
let start;
let i = 1;

// creating a client socket
const client = udp.createSocket('udp4');

// For at sende en besked i UDP brug derved Buffer.from() og gem i variabel. Denne variabel kan dermed sendes med socket.send

let data = Buffer.from('Hej server');

//Console.log når beskeden er sendt til serveren. Hvis det ikke lykkes, skal den logge at pakken er tabt.
client.send(data,PORT,HOST,function(error){
    start = new Date().getUTCMilliseconds();
    if(error){
        console.log("The package is lost");
    }else{
        console.log('UDP message sent to ' + HOST +':'+ PORT);
    }
});

//Console.log når beskeden er modtaget hos serveren. Denne eksekveres af server.on.
client.on('message',function(msg,info){
    console.log('Data received from server : ' + msg.toString());

     // if (i < 10) i++;
     //  client.send();

  let d = new Date().getUTCMilliseconds();
  let elapsed = d - start;
  console.log ('RTT: ' + elapsed + " milliseconds");
});







