const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const email = require("./logic/email")
const login = require("./logic/login")

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  },
});

var users = [
  {
    id: 1,
    username: "admin",
    password: "$2b$10$ZEUhTiL7RE0.RZAKAEYw7.5mfBEkiZuGmqrhHjJAkza6H.6Fyhgca",
    permission: true
  },
  {
    id: 2,
    username: "Michael",
    password: "secure",
    permission: false
  }
]
 function testemail(){
  var info = email.sendEmail(
    data.from, 
    data.to,
    data.subject,
    data.message,
    [
      {
        filename: 'text.txt',
        content: 'hello world!',
        contentType: 'text/plain'
      }
    ]
  )
  console.log(info)
 }

// async function test(){
//   await console.log("start")
//   await console.log( await login.register({username: "NewUser", password: "password"}, users))
//   await console.log(  await login.login({username: "NewUser", password: "password"}, users))
//   await console.log("end")
// }
// test();

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`); 
  });

  socket.on("login", async (data) => {
    try{
      if (!data) {
        socket.emit("login_failure", "No data!")
        return;
      }
      const user = users.find(user => user.username === data.username)
      if (user == null) {
        socket.emit("login_failure", "Cannot find username!")
        return;
      }
      if(await login.comparePasswords(data.password, user.password)){
        if(user.permission){
          socket.emit("login_success", "Success!")
        }else{
          socket.emit("login_failure", "No Permission!")
        }
      }else{
        socket.emit("login_failure", "Username or Password is wrong!")
      }
    }catch(e){
      socket.emit("login_failure", "Error occured!")
    }
  });
  socket.on("registration", async (data) => {
    try{
      if (!data) {
        socket.emit("registration_failure", "No data!")
        return;
      }
      const user = users.find(user => user.username === data.username)
      if(user){
        socket.emit("registration_failure", "Username already taken!")
        return;
      }
      const hashedPassword = await login.generateHashedPassword(data.password);
      const newUser = {
        username: data.username,
        password: hashedPassword,
        permission: false
      }
      users.push(newUser)
      console.log(newUser)
      socket.emit("registration_success", "Success!")
    }catch(e){
      socket.emit("registration_failure", "Error occured!")
    }
  });
  socket.on("users", () => {
    try{
      socket.emit("users_success", users)
    }catch(e){
      socket.emit("users_failure", "Error occured!")
    }
  });
  socket.on("run_email", (data) => {
    try{
      var info = email.sendEmail(
        data.from, 
        data.to,
        data.subject,
        data.message,
        data.attachments
      )
      socket.emit("run_email_acknowledgment", "Success!")
      console.log("info:")
      console.log(info)
    }catch(e){
      socket.emit("run_email_failure", "Error occured!")
      console.log(e)
    }
  });

  socket.on("run_script", (data) => {


    socket.emit("run_script_acknowledgment", "Success!")
    socket.emit("run_script_failure", "Error occured!")
  });
});


const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log("Server is listening on port: "+port+" ...");
});
