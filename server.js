const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const url = "mongodb+srv://ivaylogi:Sada$111@ivaylo.gqy5fqy.mongodb.net/?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.use(cors());
app.use(express.json());

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });



app.use("/", require('./routes/postRoute'));

app.listen(3001, () => {
    console.log('App is running on port 3001');
});
