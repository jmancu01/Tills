import express from 'express';
import data from './data'

const app = express();

app.get("/api/products", (req, res)=>{

    res.send(data)
})

app.listen(5000, () => {
    console.log('server started at local host: 5000')
});