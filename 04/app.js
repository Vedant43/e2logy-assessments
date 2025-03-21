const express = require('express')
const app = express()

require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT

// screenshots are added in main repo

app.get('/', (req, res) => {
    res.send(`Database is running on ${DB_HOST}:${DB_PORT}`)
})

app.listen(3000, () => console.log("Server running on port 3000"))
