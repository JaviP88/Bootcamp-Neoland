const express = require('express');
const { upload } = require('../../middlewares/characterFiles.middleware');
const {
    createNewCharacter
} = require('../controllers/characters.controller');
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');
const CharacterRoutes = express.Router();

CharacterRoutes.post('/newCharacter', /*[isAuthAdmin],*/ upload.single('image'), createNewCharacter);







module.exports = CharacterRoutes;