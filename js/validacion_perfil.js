const form = document.getElementById('form-perfil');

form.addEventListener('submit', (e) =>{
    // evita que se mande "por defecto"
    e.preventDefault(); 

        // Obtener todos los elementos de error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const countryError = document.getElementById('countryError');
    const cityError = document.getElementById('cityError');
    const passwordError = document.getElementById('passwordError');

    // Limpiar errores anteriores
    nameError.textContent = '';
    emailError.textContent = '';
    countryError.textContent = '';
    cityError.textContent = '';
    passwordError.textContent = '';

    // validaciones
    let name = validar(form.elements['name'].value, 'nombre', nameError);
    if(!name)return;

    let email = validar(form.elements['email'].value, 'email', emailError);
    let emailValidado = email.toLowerCase()
    if(!emailValidado) return;
    if(!validarMail(emailValidado)){
        emailError.textContent = 'Email inválido';
        return 
    }

    let country = validar(form.elements['country'].value, 'pais', countryError);
    if(!country)return;

    let city = validar(form.elements['city'].value, 'ciudad', cityError);
    if(!city)return;

    let password = form.elements['password'].value;
    if(password.trim() === ''){
        passwordError.textContent = 'La contraseña es obligatoria para el registro'
        return;
    } else if (password.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres'
        return;
    } else {
        passwordError.textContent ='';
    }

    // objetos con los datos
    const data = {
        nombre: name,
        email: emailValidado,
        pais: country,
        ciudad: city,
        password: password
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

function validar(cadena, nombreCampo, errorElemento){
        
    if(cadena.trim() === ''){
        errorElemento.textContent = (`El campo ${nombreCampo} es obligatorio para el registro`);
        return null
    }
    else{
        errorElemento.textContent = '';
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