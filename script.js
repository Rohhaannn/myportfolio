
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    }
    else {
      $('.navbar').removeClass('sticky');
    }
    // if(this.scroll > 500) {
    //   $('.scroll-up-btn').addClass('show');
    // }else {
    //   $('.scroll-up-btn').removeClass('show');
    // }
  });

  //scroll up btn
  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
  
  // slide-up script for scroll up btn
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  //toggle menu / navbar for mobie devices
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});


// typing animation script
var typed = new Typed(".typing", {
  strings: ["","Frontend Developer","React Developer", "Java Developer", "Python Developer", "Oracle/SQL management"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-2", {
  strings: ["","Frontend Developer","React Developer", "Java Developer", "Python Developer", "Oracle/SQL management"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


// sending mail on google sheet

const scriptURL = "https://script.google.com/macros/s/AKfycbx5msZ1rXZFY8LBXk7mOl8ZhZnSQFOkl0TRRXunKSZV_oz5Sq0jqf4SaranKEf03hf-1Q/exec"

const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


  // cerficates images
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
