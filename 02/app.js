const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('Something went wrong')
})

app.listen(3000, () => console.log('Server running on port 3000'))

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error)
    gracefulShutdown()
})

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise)
    console.log('Reason', reason)
})

function gracefulShutdown() {
    
    server.close(() => {
        console.log('Server closed')
        process.exit(1)
    })

    setTimeout(() => {
        console.error('Force shutting down...')
        process.exit(1)
    }, 5000)
}