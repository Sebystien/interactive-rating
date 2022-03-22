'use strict';

//All the elemetns will be displayed here

const showModal = document.querySelector('.box-confirm');
const showWindow = document.querySelector('.box-main');

const btnSubmit = document.querySelector('.btn');
const showcaseStars = document.querySelector('.star-count');
const numbers = document.querySelector('ul');
const numbersEl =  document.querySelectorAll('li');

let clickable = false;

numbers.addEventListener('click', function(e){
    e.preventDefault();
    
    let clicked = e.target.closest('ul li');

    //Guard clause
    if(!clicked) return;
    
    numbersEl.forEach(el =>{
        el.classList.remove('active');
    })
    clicked.classList.add('active');
    showcaseStars.textContent = clicked.dataset.number;

    clickable = true;
   
})


function displaWindow(){
    showModal.classList.contains('disabled')? showModal.classList.remove('disabled'):
    showWindow.classList.add('disabled');
}


btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    
    if(clickable){
        displaWindow();
    }else{
        alert('Please rate us first!');
    }
})

