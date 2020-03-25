const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log(">Server open in http://localhost:3333");
    console.log(">Ctrl + C for shutdown server.");
    
});