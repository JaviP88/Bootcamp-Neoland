const express = require('express');
const { upload } = require('../../middlewares/characterFiles.middleware');
const {
    createNewCharacter,
    updateCharacter
} = require('../controllers/characters.controller');
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');
const CharacterRoutes = express.Router();

CharacterRoutes.post('/newCharacter', /*[isAuthAdmin],*/ upload.single('image'), createNewCharacter);
CharacterRoutes.patch('/updateCharacter/:id', /*[isAuthAdmin],*/ upload.single('image'), updateCharacter);







module.exports = CharacterRoutes;