const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http')
const { setupWebsocket } = require('./websocket.js')


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://admin:uN88T5N9C0CiCfax@cluster0-99jzw.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

const server = http.Server(app)
setupWebsocket(server);


app.listen(3333);