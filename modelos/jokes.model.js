
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup : {
            type : String,
            required: [true, "setup is required"],
            minlength: [10, "setup must be at least 6 characters long"]
        },
        puchline : {
            type : String,
            required: [true, "puchline is required"],
            minlength: [3, "puchline must be at least 3 characters long"]
        }
    },
    { timestamps: true }
);

const Joke = mongoose.model('jokes',JokeSchema);

module.exports = Joke;