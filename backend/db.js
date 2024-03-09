


const mongoose = require('mongoose')


const url = 'mongodb+srv://amangupta9579:hacks@cluster0.e6qntg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}