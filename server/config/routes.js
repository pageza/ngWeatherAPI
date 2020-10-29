// Requiring mongoose for funcationality
const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const cake = require('../controllers/Cakes');
const path = require('path')


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}
