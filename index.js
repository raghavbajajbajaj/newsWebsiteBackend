const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    const params = req.query.q;
    axios.get(`https://newsapi.org/v2/everything?q=${params}&sortBy=popularity&apiKey=${process.env.REACT_APP_KEY1 || process.env.REACT_APP_KEY2}`)
    .then(response => {
        return res.json(response.data);
    }).catch(error => {
        console.log(error);
    });
});

app.listen(8000,()=>{
    console.log(`Server is listening on port ${PORT}`);
});