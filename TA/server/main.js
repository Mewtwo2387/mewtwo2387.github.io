const mysql = require('mysql2');
const ws = require('ws');
const server = new ws.Server({ port: 8080 }), webSockets = {};

var connections = 0;
var nextSessionId = 1;

server.on('connection', function (socket,r){
    connections++;
    var sessionId = nextSessionId
    var account;
    console.log(`New connection from ${r.socket.remoteAddress} - Session ID: ${sessionId}, Total active connections: ${connections}`)
    nextSessionId++;

    socket.on('message', function(message){
        message = message + ''
        console.log(`Received from Session ID ${sessionId}: ${message}`)
        let cutMessage = message.split('~')
        switch(cutMessage[0]){
            case 'LOGIN':
                var username = cutMessage[1]
                var password = cutMessage[2]
                if(!(/^[A-Za-z0-9ø]*$/.test(username+password))){
                    console.log(`Sent to Session ID ${sessionId}: LOGIN~error~W...why are there special characters here?`)
                    socket.send('LOGIN~error~W...why are there special characters here?')
                    return;
                }
                username = username.toLowerCase()
                query(`SELECT * FROM gameData WHERE username='${username}'`).then(function(result){
                    try{
                        if (password==result[0].password){
                            console.log(`Sent to Session ID ${sessionId}: LOGIN~success~${JSON.stringify(result)}`)
                            socket.send(`LOGIN~success~${JSON.stringify(result)}`)
                            console.log(`Session ID ${sessionId} is now logged into ${username}`)
                            account = username;
                        }else{
                            console.log(`Sent to Session ID ${sessionId}: LOGIN~error~Incorrect Password.`)
                            socket.send('LOGIN~error~Incorrect Password.')
                        }
                    }catch(e){
                        console.log(`Sent to Session ID ${sessionId}: LOGIN~error~Username does not exist.`)
                        socket.send('LOGIN~error~Username does not exist.')
                    }
                })
                return;


            case 'SIGNUP':
                var username = cutMessage[1]
                var password = cutMessage[2]
                if(!(/^[A-Za-z0-9ø]*$/.test(username+password))){
                    console.log(`Sent to Session ID ${sessionId}: SIGNUP~error~Username and password can only contain numbers, letters, or ø`)
                    socket.send('SIGNUP~error~Username and password can only contain numbers, letters, or ø')
                    return;
                }else if(username.length<2||username.length>15||password.length<2||password.length>15){
                    console.log(`Sent to Session ID ${sessionId}: SIGNUP~error~Username and password must be between 2 and 15 characters`)
                    socket.send('SIGNUP~error~Username and password must be between 2 and 15 characters')
                    return;
                }
                username = username.toLowerCase()
                query(`SELECT * FROM gameData WHERE username='${username}'`).then(function(result){
                    try{
                        if(result[0].username==username){
                            console.log(`Sent to Session ID ${sessionId}: SIGNUP~error~Username already Exist.`)
                            socket.send('SIGNUP~error~Username already Exist.')
                        }
                    }catch(e){
                        query(`INSERT INTO gameData (username, password, level) VALUES ('${username}', '${password}', '1')`).then(function(result){
                            console.log(`Sent to Session ID ${sessionId}: SIGNUP~success`)
                            socket.send('SIGNUP~success')
                        })
                    }
                })
                return;

            case 'CHAT':
                query(`SELECT * FROM gameData WHERE username='${account}'`).then(function(result){
                    broadcast(`CHAT~${account} (${result[0].level}): ${cutMessage[1]}`)
                })
                return;
            default:
                return;
        }
    })

    socket.on('close', function(){
        connections--;
        console.log(`Session ID ${sessionId} closed connection, Total active connections: ${connections}`)
    })

})

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "Ei",
  password: "uraMEOWnium235",
  database: "TA"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function query(message){
    return new Promise((resolve, reject) => {
        con.query(message, function (err, result){
            if (err){
                return reject(err)
            }
            resolve(result)
        });
    });
}

function broadcast(data) { 
    server.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(data);
      }
    });
    console.log('Broadcasted to everyone: ' + data);
  }