const express = require('express');
const mongoose = require('mongoose');
const app = express();



mongoose.connect('mongodb+srv://Amangupta:<password>@amangupta-cluster.abvml.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB');
}).on('Connection unsuccessful', (err) => {
    console.log(err);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
