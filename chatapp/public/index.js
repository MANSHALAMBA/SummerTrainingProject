const app = require('express')();
const server= require('http').Server(app);
const io = require('socket.io')(server);


const port = 4000;

server.listen(port, () =>{

console.log('Server is listening on Port: ${port}');
}

);


app.get('/',(req,res) =>{


    res.sendFile(__dirname + '/index.html');

});
app.get('/groupchatone',(req,res) =>{


    res.sendFile(__dirname + '/groupchatone.html');

});
app.get('/groupchattwo',(req,res) =>{


    res.sendFile(__dirname + '/groupchattwo.html');

});
app.get('/groupchatthree',(req,res) =>{


    res.sendFile(__dirname + '/groupchatthree.html');

});
 
const tech = io.of('/tech');

tech.on('connection' , (socket)=>{

   socket.on('join' , (data) => {

       socket.join(data.room);
       tech.in(data.room).emit('message' , `New User Joined ${data.room} !`);

   });
   socket.on( 'message' , (data)=>{
          tech.in(data.room).emit('message' , data.msg);

   });
 io.on('disconnect' , ()=>{

 console.log('User Disconnected ');
 tech.emit('message' , 'User Disconnected');

 })

});