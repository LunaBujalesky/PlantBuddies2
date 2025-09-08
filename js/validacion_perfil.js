const form = document.getElementById('form-perfil');

form.addEventListener('submit', (e) =>{
    


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



    

    e.preventDefault(); // evita que se mande "por defecto"
    console.log(`Datos enviados: ${name}, ${emailValidado}, ${country} y ${city} `);
      // ✅ Todos los campos son válidos
    alert('Datos enviados correctamente');
    form.reset();
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