const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3000, () => {
    console.log(">Server open in http://localhost:3000");
    console.log(">Ctrl + C for shutdown server.");
    
});