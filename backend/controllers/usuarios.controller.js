exports.crearUsuario = (req, res) => {
    const { nombre, email, pais, ciudad } = req.body;
    //valido del lado del backend
    //funciones para validar
    const campoVacio = (valor) => !valor || valor.trim() === '';

    const emailValidado = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    //Validaciones
    if(campoVacio(nombre)){
        return res.status(400).json({error: '⛔ Nombre obligatorio'});
    }
    
    if(campoVacio(email)){
        return res.status(400).json({error: '⛔ Correo electrónico obligatorio'});
    }
    if(!emailValidado(email)){
        return res.status(400).json({error: '📧 El mail no es valido'});
    }

    if(campoVacio(pais)){
        return res.status(400).json({error: '⛔ Pais obligatorio'});
    }

        if(campoVacio(ciudad)){
        return res.status(400).json({error: '⛔ Ciudad obligatorio'});
    }
    
    //si pasa todas las validaciones

    res.json({
        mensaje: '👱🏻 Usuario recibido correctamente',
        datos: req.body
    });
}