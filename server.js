const express  = require('express');
const app = express();
const route = require('./routes/route');
const users = require('./routes/users.js');

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/route',route);
app.use('/users',users);

app.listen(PORT,()=>{
    console.log(`open on http://localhost:${PORT}`);
})