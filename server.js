const express  = require('express');
const app = express();
const route = require('./routes/route');

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/route',route);

app.listen(PORT,()=>{
    console.log(`open on http://localhost:${PORT}`);
})