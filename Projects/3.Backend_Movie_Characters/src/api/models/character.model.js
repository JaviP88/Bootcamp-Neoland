const mongoose = require('mongoose');

const {Schema} = mongoose

const CharactersSchema = new Schema(
    {
        name: {type:String, required:true, unique},
        image: {type:String, required:true},
        movie: {type:String, required:true},
        decription: {type:String, required:true},
        user:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}]
    },
    {
        timestamps: true
    }
);

const Character = mongoose.model('Character', CharactersSchema);

module.exports = Character