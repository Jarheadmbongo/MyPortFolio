
function sendMail() {
  var params = {
      nom: form.nom.value,
      email: form.email.value,
      // telephone: form.telephone.value,
      message: form.message.value,
  };
  const serviceID = "service_oc20sel";
  const templateID = "template_ecy0wr4";
  emailjs.send(serviceID, templateID, params)
      .then(res => {
          nom: form.nom.value = "";
          email: form.email.value = "";
          message: form.message.value = "";
          console.log(res);
          alert('Votre message a bien été envoyer');
      })
      .catch(err => console.log(err));
}

// const buttonEnvoyer = document.getElementById('buttonEnvoyer');
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var nom = document.querySelector('#nom');
var email = document.querySelector('#email');
var message = document.querySelector('#message');
const nomValue = nom.value;
const messageValue = message.value;

    sendMail();
});


    
   

// MENU HAMBURGER
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// message animation

const messages = [
  "FULL STACK DEVELOPER",
  "UI/UX Design!",
  "DevOps"
];

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % messages.length;
  const messageElement = document.querySelector('.message');
  messageElement.innerText = messages[currentIndex];
}, 1000);










