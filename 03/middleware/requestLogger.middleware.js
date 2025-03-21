const requestLogger = (req, res, next) => {
    console.log(`${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} ${req.method} ${req.url}`) 
    next() 
} 

module.exports = requestLogger