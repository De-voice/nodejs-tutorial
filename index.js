const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;


 mongoose.connect(process.env.DB_HOST,{useUnifiedTopology:true,useNewUrlParser:true
}, () => console.log("YAY! WE ARE LIVE"));

const db = mongoose.connection;



app.get("/", (req, res) => {
	res.send(`
     <h1>Welcome to TechAcademy </h1>
    <p>Home for learning</p>
    `);
});



app.listen(PORT, () => {
	console.log(`app is listening to PORT ${PORT}`);
});



