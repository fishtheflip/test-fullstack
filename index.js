const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({extended:true}));
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/log', require('./routes/log.route'));

const start = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.qojrh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {            
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true});

        app.listen(PORT, ()=>{
            console.log('Server is running on ', PORT)
        })
    } catch (error) {
        console.log(error)
    }
} 

start();