const express = require('express')
const app = express()

  // screenshots are added in main repo README.md

app.get('/user/:id', (req, res) => {
    res.send(`User data for ID: ${req.params.id}`)
})

app.listen(3000, () => console.log('Server running on port 3000'))
