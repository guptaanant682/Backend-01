const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log('App starting...');
});


app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.post('/api/cars', (req, res) =>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send('car submitted successfully');
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Cars',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('Connected to MongoDB')})
.catch((error) => {console.log("Received error: " + error);
})


