const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require("../../helpers/handle-error");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
dotenv.config()



//! ------------------------------------------------------------------------
//? -------------------------- REGISTER-------------------------------------
//! ------------------------------------------------------------------------

const register = async (req, res, next) => {
    let catchImg = req.file?.path;
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
                deleteImgCloudinary(catchImg)   //! siempre se sube la imagen aunque el user esté repetido (porque lo sube el middleware), por eso hay que traerse la funcion deleteImgCloudinary aquí para borrarla.

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
        deleteImgCloudinary(catchImg)   //! siempre se sube la imagen aunque el user esté repetido (porque lo sube el middleware), por eso hay que traerse la funcion deleteImgCloudinary aquí para borrarla.
        return next(setError(error.code || 500, error.message || 'Create user failed'));   //? A revisar!!!, si el usuario existe, te lanza un error 500 en lugar del 409 (habrá que meterlo en un try catch? o detener la ejecución
    };
};


//! ------------------------------------------------------------------------
//? -------------------------- CHECK NEW USER ------------------------------
//! ------------------------------------------------------------------------

const checkNewUser = async (res, req, next) => {
    try {
         //! nos traemos de la req.body el email y codigo de confirmation
        const { email, confirmationCode } = req.body;

        //! hay que ver que el usuario exista porque si no existe no tiene sentido hacer ninguna verificacion
        const userExists = await User.findOne({ email });

        if (!userExists) {
            //!No existe----> 404 de no se encuentra
            return res.status (404).json("User not found");
        } else {
            // cogemos que comparamos que el codigo que recibimos por la req.body y el del userExists es igual
            if (confirmationCode === userExists.confirmationCode) {

                // si es igual actualizamos la propiedad check y la ponemos a true
                try {
                    await userExists.updateOne({ check: true });
                    // hacemos un testeo de que este user se ha actualizado correctamente, hacemos un findOne
                    const updateUser = await User.findOne({ email });

                    // este finOne nos sirve para hacer un ternario que nos diga si la propiedad vale true o false
                    return res.status(200).json({
                        testCheckOk: updateUser.check == true ? true : false,
                    });
                } catch (error) {
                return res.status(404).json(error.message);
                }
            } else {
                /// En caso dec equivocarse con el codigo lo borramos de la base datos y lo mandamos al registro
                await User.findByIdAndDelete(userExists._id);

                // borramos la imagen
                deleteImgCloudinary(userExists.image);

                // devolvemos un 200 con el texto para ver si el delete se ha hecho correctamente
                return res.status(200).json({
                    userExists,
                    check: false,
                    delete: (await User.findById(userExists._id))
                        ? "❌ Error, we could't delete user ❌"
                        : "✅ Delete user done ✅"
                });
            };
        };
    } catch (error) {
        // siempre en el catch devolvemos un 500 con el error general
        return next(setError(500, "General error check code"));
    };
};





module.exports = {
    register,
    checkNewUser
};

