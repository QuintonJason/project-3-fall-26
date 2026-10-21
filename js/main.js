// JS scripts placed here
const box = document.querySelector('.box');
const outerBox= document.querySelector('.outer-box');

box.addEventListener('click', () => {
    outerBox.classList.toggle('active');
});