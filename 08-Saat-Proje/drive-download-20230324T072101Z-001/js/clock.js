
let myName = prompt('Adınızı giriniz:');
let date = new Date();

const welcome = document.querySelector('#myName');
const time = document.querySelector('#time');
welcome.innerHTML = ` ${myName[0].toUpperCase() + myName.slice(1).toLowerCase()}`;
time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;