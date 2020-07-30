const express = require('express')
const cors = require('cors')
const data = require('./phones.json')

const app = express()

app.use(cors())

app.get('/phones', (req, res) => {
    res.status(200).json({
        data
    })
})

app.listen(1234, () => {
    console.log('Server is listening on port: 1234');
});