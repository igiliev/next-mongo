const mongoose = require('mongoose')
const url = "mongodb+srv://ivaylogi:Sada$111@ivaylo.gqy5fqy.mongodb.net/?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });
