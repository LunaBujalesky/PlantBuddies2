const burgerIcon = document.getElementById('burgerIcon');
const burgerMenu = document.getElementById('burgerMenu');

console.log('Burger icon:', burgerIcon);

burgerIcon.addEventListener('click', () => {
  console.log('Burger icon clicked');
  burgerMenu.classList.toggle('invisible');
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

// modal del perfil bootstrap, para visualizar preview
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})