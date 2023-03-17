var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const mongoose = require("mongoose");
const http = require('http').createServer(app);
const cors = require('cors');
require('dotenv').config()
const axios = require('axios').default;

const Delivery = require("./controllers/DeliveryController")
//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json())


//SOCKET INIATIALISATION
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});
var PORT = 3000;


//DATABASE CONNECTION
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",{
        useNewUrlParser: true,
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});

//ROUTERS
const packageRouter  = require('./routes/PackageRoutes')
const deliveryRouter = require('./routes/DeliveryRoutes')


axios.defaults.baseURL = 'http://localhost:3000';


//SOCKET
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('status_changed', (status, id) => {
    axios.put(`/api/deliveries/${id}/change-status`, {
      status: status
    })
    .then(function (response) {
      io.emit('status_changed', {status: response.data.data.status});
    })
    .catch(function (error) {
      console.log(error);
    });

  });
});

app.use("/api/packages", packageRouter);
app.use("/api/deliveries", deliveryRouter);


http.listen(PORT, () => {
  console.log('listening on *:3000');
});