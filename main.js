
// portfolio swiper
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


// skills  more 
const skillHead = document.getElementsByClassName('skillls-div');
const  first_open = document.getElementsByClassName('frondend ')

    for (let i = 0; i < skillHead.length; i++){
      skillHead[i].addEventListener('click', () => {
        skillHead[i].classList.toggle('list');
      });
      if (skillHead === 'skillls-div'){
        
      }
    }
    for (let i = 0; i < first_open.length; i++) {
      first_open[i].classList.toggle('list');
    }


