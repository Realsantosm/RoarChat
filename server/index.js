require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require("./routes/userRoutes")

// import files from ENV and its data
const URL = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;


const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/api/auth", userRoutes);


// connection to DATABASE
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then((data) => {
    console.log(`Database Connected successfully : ${data.connection.host}`)
}).catch((err) => {
    console.log(err.message)
});


// APP Listening
const server = app.listen(URL, () => {
    console.log('--------------------------------------')
    console.log(`Server started on ${URL}`);
    console.log('--------------------------------------')
});