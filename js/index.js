/*
document.addEventListener('DOMContentLoaded', function () {
  const startNowBtn = document.getElementById('startNowBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.close-modal');
  const passwordInput = document.getElementById('password');
  const normalCharacter = document.getElementById('plantCharacter');
  const hiddenCharacter = document.getElementById('plantCharacterHidden');
  const togglePassword = document.querySelector('.toggle-password');


  // Abrir modal cuando se hace clic en "Comenzar ahora"
  startNowBtn.addEventListener('click', function () {
    loginModal.style.display = 'block';
  });
  

  // Cerrar modal cuando se hace clic en la X
  closeModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

  // Cerrar modal cuando se hace clic fuera del contenedor
  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Cuando se hace focus en el campo de contraseña, el personaje se esconde
  passwordInput.addEventListener('focus', function () {
    normalCharacter.style.opacity = '0';
    hiddenCharacter.style.opacity = '1';
  });

  // Cuando se pierde el focus, el personaje vuelve a aparecer
  passwordInput.addEventListener('blur', function () {
    if (!passwordInput.value) {
      normalCharacter.style.opacity = '1';
      hiddenCharacter.style.opacity = '0';
    }
  });

  // Opcional: Mostrar/ocultar contraseña
  togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.classList.add('show');
      // Cuando se muestra la contraseña, el personaje vuelve a aparecer
      normalCharacter.style.opacity = '1';
      hiddenCharacter.style.opacity = '0';
    } else {
      passwordInput.type = 'password';
      togglePassword.classList.remove('show');
      // Si el campo de contraseña sigue enfocado, el personaje se esconde de nuevo
      if (document.activeElement === passwordInput) {
        normalCharacter.style.opacity = '0';
        hiddenCharacter.style.opacity = '1';
      }
    }
  });
});
*/


/*
// menu hamburguesa cuando ingresa por celular
const hamburguesa = document.getElementById("hamburguesa");
//const menuEnlaces = document.getElementById("nav-links");

if (hamburguesa) console.log("Menu hamburguesa encontrado");
else console.log("Menu hamburguesa no encontrado");

hamburguesa.addEventListener('click', () => {
  //menuEnlaces.classList.toggle('show');
  hamburguesa.classList.toggle('active');
  console.log("Menu hamburguesa activado");
});


// modal del perfil bootstrap, para visualizar preview
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
*/





  
  const submenu = document.getElementById('submenu');
  const hoverBg = document.getElementById('hoverBg');
  const menuItems = document.querySelectorAll('.menu-item');

  let currentActive = 1; // Registro está activo por defecto
  let isHovering = false;

  // Posicionar el hover background en el elemento activo inicialmente
  function setInitialPosition() {
    const activeItem = menuItems[currentActive];
    hoverBg.style.transform = `translateY(${activeItem.offsetTop}px)`;
    hoverBg.classList.add('active');
  }

  // Inicializar posición
  setInitialPosition();

  menuItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      isHovering = true;
      hoverBg.style.transform = `translateY(${item.offsetTop}px)`;
      hoverBg.classList.add('active');

      // Remover clase active de todos los items y agregarla al hover actual
      menuItems.forEach(mi => mi.classList.remove('active'));
      item.classList.add('active');
    });

    item.addEventListener('click', () => {
      currentActive = index;
      // Mantener el item clickeado como activo
      menuItems.forEach(mi => mi.classList.remove('active'));
      item.classList.add('active');
    });
  });

  submenu.addEventListener('mouseleave', () => {
    isHovering = false;
    // Volver al elemento activo seleccionado
    const activeItem = menuItems[currentActive];
    hoverBg.style.transform = `translateY(${activeItem.offsetTop}px)`;

    // Restaurar la clase active al elemento seleccionado
    menuItems.forEach(mi => mi.classList.remove('active'));
    activeItem.classList.add('active');
  });

  // Ajustar posición si la ventana cambia de tamaño
  window.addEventListener('resize', () => {
    if (!isHovering) {
      setInitialPosition();
    }
  });
  const hamburguesa = document.getElementById('hamburguesa');
  const menuFondo = document.getElementById('menuFondo');

  hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    menuFondo.classList.toggle('active');
  });

  /*
  // Cerrar al hacer clic en el fondo
  menuFondo.addEventListener('click', (e) => {
    if (e.target === menuFondo) {
      hamburguesa.classList.remove('active');
      menuFondo.classList.remove('active');
    }
  });
  */
