const express = require('express');
const Cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(Cors());

app.use('/', require('./routes/routes'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})