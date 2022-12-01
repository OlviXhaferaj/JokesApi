const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    joke:{
        type: String
    },
    published:{
        type:Date,
        default: Date.now
    }
})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;