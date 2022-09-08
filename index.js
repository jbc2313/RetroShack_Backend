const express = require('express');
const app = express();
const PORT = 7777 || process.env.PORT;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productsRoutes = require('./routes/productsRoutes'); 

//allow cors
app.use(cors())

//initialize dotenv file
require('dotenv').config();

//connect to db
const db = require('./db/connection');

//test db
db.authenticate()
  .then((() => console.log('DB connected...')))
  .catch(err => console.log('Error: ' + err))

//initialize express server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize middleware


//mount routes
app.use(authRoutes);
app.use(productsRoutes);





app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})