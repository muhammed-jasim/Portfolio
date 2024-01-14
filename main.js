// navigation bar
let MenuIcon = document.getElementById('phone-menu')
let navItems = document.querySelector('.mobile-nav-items')
let logoName = document.getElementById('logo-name')

// var isMenuOpen = false;

MenuIcon.addEventListener('click',function(){
  // isMenuOpen = !isMenuOpen;
  navItems.classList.toggle('active')
  MenuIcon.classList.toggle('bi-x')
  // MenuIcon.innerHTML = isMenuOpen ? 'Close' : 'lists';
  // logoName.classList.toggle('hidden',isMenuOpen)

})
navItems.addEventListener('click',function(){
  navItems.classList.remove('active')
  MenuIcon.classList.remove('bi-x')

  
})


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


    document.getElementById('openModalBtn').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementById('closeModalBtn').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'none';
  });
  
  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', function(event) {
      var modal = document.getElementById('modal');
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
  
    