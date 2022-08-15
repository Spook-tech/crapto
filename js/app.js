document.addEventListener('click', onClick);

function onClick(e){
   let targetElem = e.target;

   for (let index = 0; index < targetElem.length; index++) {
      if(targetElem[index].classList.contains('start-mining__crypto__btn')){
         e.preventDefault();
         console.log(5);
      }  
      console.log(index);
   }
}  



// BURGER
let menuBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let headerAuth = document.querySelector(".header__auth");
menuBurger.addEventListener("click", function(){
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   headerAuth.classList.toggle("active");
   document.body.classList.toggle("lock");
});