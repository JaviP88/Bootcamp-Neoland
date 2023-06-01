const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require("../../helpers/handle-error");
dotenv.config()



//! ------------------------------------------------------------------------
//? -------------------------- REGISTER-------------------------------------
//! ------------------------------------------------------------------------

const register = async (req, res, next) => {
    try {
        //! lo primero actualizar los index de los elementos unique
        await User.syncIndexes();

        //! vamos a configurar nodemailer porque tenemos que enviar un codigo
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password,
            },
            });

            //! Ahora creamos el código
            const confirmationCode = Math.floor(
                Math.random() * (999999 - 100000) + 100000
            );

            //! HACER UNA NUEVA INSTANCIA DE USUARIO
            const newUser = new User({...req.body, confirmationCode})

             //! le metemos la imagen en caso de recibirla, si no la recibo le meto una estandar
            if (req.file){
                newUser.image = req.file.path
            } else {
                newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
            }

             //! tenemos que buscarlo en la base de datos para saber que no existe

             const userExist = await User.findOne({
                email: newUser.email,
                name: newUser.name
             });

             if (userExist) {
                //Se puede hacer return res.status(409).json("this user already exist") o se puede hacer un return next() para que rompa la ejecución.
                // Pero en helpers, haniamos creado un manejador de errores, así que vamos a usarlo.
                return next(setError(409, 'this user already exist'));
             } else {
                const createUser = await newUser.save();
                createUser.password = null;

                //! -------- VAMOS A ENVIAR EL CORREO ------
                const mailOptions = {
                    from: email,
                    to: req.body.email,
                    subject: "Code confirmation",
                    text: `Your code is ${confirmationCode}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

                return res.status(201).json({
                    user: createUser,
                    confirmationCode: confirmationCode
                });
             };
    } catch (error) {
        return next(setError(500, error.message || 'Create user failed'));
    };
};

module.exports = {
    register
};

