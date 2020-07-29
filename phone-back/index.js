const express = require('express')

const data = require('./phones.json')

const app = express()

app.get('/phones', (req, res) => {
    res.status(200).json({
        data
    })
})

app.listen(1234, () => {
    console.log('Server is listening on port: 1234');
});