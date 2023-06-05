const express = require('express');
const { upload } = require("../../middlewares/files.middleware");
const {
    register,
    checkNewUser,
    resentCode,
    login,
    forgotPassword,
    sendPassword,
    modifyPassword,
    update,
    deleteUser,
    addFavouriteCharacter
} = require("../controllers/users.controller");
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');
const UserRoutes = express.Router()

UserRoutes.post('/register', upload.single("image"), register);
UserRoutes.post('/check', checkNewUser);
UserRoutes.post('/resend', resentCode);
UserRoutes.post('/login', login);
UserRoutes.get('/forgotpassword', forgotPassword);   //? Hay que hacer el redirecionamiento (más abajo), para hacerlo sólo se puede hacer con get, nunca con post
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/update', [isAuth], upload.single('image'), update);
UserRoutes.delete('/', [isAuth], deleteUser);
UserRoutes.post('/addFavouriteCharacter', [isAuth], addFavouriteCharacter);   //?    ¿¿Hay que meterle en la ruta :id??


//! -------REDIRECT --------------------

UserRoutes.get('/forgotpassword/sendPassword/:id', sendPassword);


module.exports = UserRoutes