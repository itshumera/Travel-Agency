const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const navList = document.querySelector(".nav-list");

openNav.addEventListener("click", function(){
  navList.classList.add("show");
});

closeNav.addEventListener("click", function(){
  navList.classList.remove("show");
});

//for navBar

const navBar = document.querySelector('.nav');
const navHeight = navBar.clientHeight;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    navBar.classList.add("fix-nav");
    openNav.classList.add("fix-nav-btn");
  }
  else{
    navBar.classList.remove("fix-nav");
    openNav.classList.remove("fix-nav-btn");
  }
});

//JS for video slider navigation

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

function sliderNav(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Js for slick slider

$('.center').slick({
  prevArrow: '#main_slider_prev',
  nextArrow: '#main_slider_next',
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 469,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});


$('.tour_carousel_slider').slick({
  prevArrow: '#aboutTour_slider_prev',
  nextArrow: '#aboutTour_slider_next',
  centerMode: true,
  centerPadding: '140px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

const side_slider = document.querySelectorAll('.side_slider');

$(side_slider).each(function(){
  $(this).slick({
    prevArrow: $(this).siblings('.side_slider_prev_btn'),
    nextArrow: $(this).siblings('.side_slider_next_btn'),
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// for dayByDay

const dayByday_box = document.querySelectorAll(".dayByDay_chkbox");
const dayByday_minusbox = document.querySelectorAll(".dayByDay_minusbox");
const dayByDay_bottom = document.querySelectorAll(".dayByDay_item_bottom");

function showBottom(o){
  dayByday_minusbox.forEach((box) => {
    box.classList.remove("show_minusbox");
  });

  dayByday_box.forEach((box) => {
    box.classList.remove("hide_box");
  });

  dayByDay_bottom.forEach((bottom) => {
    bottom.classList.remove("show_bottom");
  });

  dayByday_minusbox[o].classList.add("show_minusbox");
  dayByday_box[o].classList.add("hide_box");
  dayByDay_bottom[o].classList.add("show_bottom");
}

dayByday_box.forEach((item, x) => {
    item.addEventListener("click", ()=>{
      showBottom(x);
    });
});

  function hideBottom(a){
    dayByDay_bottom[a].classList.remove("show_bottom");
    dayByday_minusbox[a].classList.remove("show_minusbox");
    dayByday_box[a].classList.remove("hide_box");
  }

dayByday_minusbox.forEach((item2, x2) => {
    item2.addEventListener("click", ()=>{
      hideBottom(x2);
    });
});


//price-range
var priceRange = document.querySelectorAll(".range_price_val");

priceRange.forEach((pr, r) => {
  pr.addEventListener("input", ()=>{
    document.querySelector('#range-price-text').innerHTML = "$" + priceRange[r].value;
  });
});

//video section in about us
const aboutUs_vid = document.querySelectorAll('.aboutUs_vid');
const aboutUs_playBtn = document.querySelectorAll('.aboutUs_playBtn');
const aboutUs_pauseBtn = document.querySelectorAll('.aboutUs_pauseBtn');

aboutUs_playBtn.forEach((item, i) => {
  item.addEventListener("click", ()=>{
    item.classList.add("hideBtn");
    aboutUs_pauseBtn[i].classList.add("showBtn");
    aboutUs_vid[i].play();
  })
});

aboutUs_pauseBtn.forEach((item, i) => {
  item.addEventListener("click", ()=>{
    item.classList.remove("showBtn");
    aboutUs_playBtn[i].classList.remove("hideBtn");
    aboutUs_vid[i].pause();
  })
});
