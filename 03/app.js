const express = require('express') 
const requestLogger = require('./middleware/requestLogger.middleware.js')
const app = express() 

app.use(requestLogger) 

app.get('/', (req, res) => {
    res.send("Hello, world!") 
}) 

app.get('/demo', (req, res) => {
    res.send("Hello from demo")
})

app.listen(3000, () => console.log("Server running on port 3000")) 
