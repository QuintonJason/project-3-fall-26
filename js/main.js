// JS scripts placed here


const box = document.querySelector('.box');
const outerBox= document.querySelector('.outer-box');
const buttons = document.querySelectorAll('.button');

box.addEventListener('click', () => {
    outerBox.classList.toggle('active');
});

