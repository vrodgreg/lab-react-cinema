const { Schema, model } = require('mongoose')

const movieCollectionSchema = new Schema ({
    title: {type: String},
    director: {type: String},
    stars: {type: [String]},
    image: {type: String},
    description: {type: String},
    showtimes: {type: [String]}
})

module.exports = model('movieCollection', movieCollectionSchema)