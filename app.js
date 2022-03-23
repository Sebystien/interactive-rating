'use strict';

//All the elemetns will be displayed here

const showModal = document.querySelector('.box-confirm');
const showWindow = document.querySelector('.box-main');

const formSubmit = document.querySelector('form');
const showcaseStars = document.querySelector('.star-count');

const radioValue = document.querySelectorAll('input[type="radio"]');



//Old solution using the list style item

/*


let clickable = false;

const numbers = document.querySelector('ul');
const numbersEl =  document.querySelectorAll('li');

*/
/*numbers.addEventListener('click', function(e){
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
   
})*/


function displayWindow(r){
    showModal.classList.contains('disabled')? showModal.classList.remove('disabled'):
    showWindow.classList.add('disabled');
    showcaseStars.textContent = r;
}




formSubmit.addEventListener('submit', function(e){
    e.preventDefault();

    
   //Note to self, using forEach is not practical when looping through this type of array
   
   for(let el= 0; el < radioValue.length; el++  ){

      if(radioValue[el].checked){
         
          console.log(radioValue[el].value)
          displayWindow(radioValue[el].value);

      };

   }

   

})

