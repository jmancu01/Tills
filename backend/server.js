import express from 'express';
import data from './data'

var cors = require('cors')

const app = express();

app.use(cors());

app.get("/api/products", (req, res)=>{

    res.send(data)
})

app.listen(5000, () => {
    console.log('server started at local host: 5000')
});