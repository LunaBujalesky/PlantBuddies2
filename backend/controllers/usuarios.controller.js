exports.crearUsuario = (req, res) => {
    const { nombre, email, pais, ciudad } = req.body;

    console.log('Usuario recibido: ', req.body);

    res.status(200).json({mensaje: 'Usuario recibido correctamente'});
}