const express=require('express')
const connect=require('./connect/connect')
const app=express(); 
const routes=require('./routes/url')
connect('mongodb://127.0.0.1:27017/urlshortener');
//middlewares
app.use(express.json());
const port=3000;

app.use('/url',routes)


//listening on port 3000
app.listen(port,()=>console.log(`Server running on port ${port}`));