const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express()

app.get('/file-data', (req, res) => {
    const filePath = path.join(__dirname, 'largeFile.txt')
    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' })

    readStream.on('data', (chunk) => {
        console.log('Received chunk:', chunk)
    })
    
    readStream.on('end', () => {
        console.log('Read file')
    })
    
    readStream.on('error', (error) => {
        console.error('Error reading file:', error)
    })  

    res.status(200).send("Successfully read file")
})

app.listen(3000, () => console.log('Server running on port 3000'))