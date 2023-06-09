const Character = require('../models/character.model');
const User = require('../models/user.model');
const dotenv = require('dotenv');
const setError = require('../../helpers/handle-error');
const { deleteImgCloudinary } = require('../../middlewares/characterFiles.middleware');
dotenv.config()



//! -------------------------------------------------------------------------------------
//? -------------------------- CREATE NEW CHARACTER -------------------------------------
//! -------------------------------------------------------------------------------------

const createNewCharacter = async (req, res, next) => {
    let catchImg = req.file?.path;
    try {
        // Actualizamos los index de los elementos unique
        await Character.syncIndexes();

        // Creamos una nueva instancia de personaje
        const newCharacter = new Character({ ...req.body });

        // Le metemos la imagen
        if (req.file) {
            newCharacter.image = req.file.path;
        } else {
            return next(setError(404, 'Image is not included'));
        };
        
        
        // Comprobamos si el personaje existe en la base de datos o no.
        const characterExist = await Character.findOne({
            name: newCharacter.name,
            description: newCharacter.description
        });

        if (characterExist) {
            deleteImgCloudinary(catchImg);
            return next(setError(409, 'This character already exist in DB'));
        } else {
            const createCharacter = await newCharacter.save();
            return res.status(201).json({
                character: createCharacter
            });
        };

    } catch (error) {
        deleteImgCloudinary(catchImg);
        return next(setError(error.code || 500, error.message || 'Create character failed'));
    };
};

//! ---------------------------------------------------------------------------------
//? -------------------------- UPDATE CHARACTER -------------------------------------
//! ---------------------------------------------------------------------------------

//! ---------------------------------------------------------------------------------
//? -------------------------- DELETE CHARACTER -------------------------------------
//! ---------------------------------------------------------------------------------

//! ------------------------------------------------------------------------------------
//? -------------------------- GET CHARACTER BY ID -------------------------------------
//! ------------------------------------------------------------------------------------

//! -----------------------------------------------------------------------------------
//? -------------------------- GET ALL CHARACTERS -------------------------------------
//! -----------------------------------------------------------------------------------




module.exports = {
    createNewCharacter
};