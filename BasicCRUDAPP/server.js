const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

require('./server/models/vocabModel')
const routes = require('./server/routes/vocabRoutes')


// mongoose.set('useFindAndModify', false)
mongoose.connect(
    'mongodb://localhost:27017/',
    { dbName: "HenryMongoDb",
    useNewUrlParser: true,
    useUnifiedTopology: true, } 
)
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', ()=>{
        console.log('Mongoose connection is open')
    })
    .on('error', (err) => {
        console.log('Connection error' + err.message)
    })

const port = process.env.PORT || 3004;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)
app.listen(port);

app.use((req, res) => {
    res.status(404).send({url:`${req.originalUrl} not found`});
})

// app.get('/', (req, res) => {
//     res.send('Hello, world!')
// })

console.log(`Server started on port ${port}`);