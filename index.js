const express = require('express');
const app = express();
const PORT = 7777 || process.env.PORT;
const authRoutes = require('./routes/authRoutes');

//initialize dotenv file
require('dotenv').config();

//connect to db


//initialize express server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize middleware


//mount routes
app.use(authRoutes);





app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})