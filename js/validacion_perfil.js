const form = document.getElementById('form-perfil');

form.addEventListener('submit', (e) =>{
    // evita que se mande "por defecto"
    e.preventDefault(); 

    // validaciones
    let name = validar(form.elements['name'].value, 'nombre');
    if(!name)return;

    let email = validar(form.elements['email'].value, 'email');
    let emailValidado = email.toLowerCase()
    if(!emailValidado) return;
    if(!validarMail(email)){
        alert(`${email} inválido`);
        return 
    }

    let country = validar(form.elements['country'].value, 'pais');
    if(!country)return;

    let city = validar(form.elements['city'].value, 'ciudad');
    if(!city)return;

    // objetos con los datos
    const data = {
        nombre: name,
        email: emailValidado,
        pais: country,
        ciudad: city
    };

// funcion fetch para enviar los datos al backend - por ahora hardcodeada hasta que agregue .env
    fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(result => {
            // ✅ Todos los campos son válidos
            console.log(`Respuesta del Servidor: ${JSON.stringify(result)}`);
            form.reset();
        })
        .catch(error => {('Error al enviar los datos', error);
                alert(`Los datos no se enviaron`)}
    );
});

function validar(cadena, nombreCampo){
        
    if(cadena.trim() === ''){
        alert(`El campo ${nombreCampo} es obligatorio para el registro`);
        return null
    }
    else{
        return formatoCadena(cadena)
    }
}

function formatoCadena(cadena){
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
}
function validarMail(cadena){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(cadena);
}