window.addEventListener('load', (event) => {
  //   setInterval(secFirstSlider,3000);
});

//----------------------MOBILE HEADER----------------------------------------//
var menu_bar = document.getElementsByClassName('mobile__btnUI');
var mob_menu = document.getElementsByClassName('mobile__actionBtn');
var menuWindow = document.getElementsByClassName('mobile__navigation');
var isMenuShow = false;
//mob_menu[0].addEventListener('click',showMenu);
mob_menu[0].addEventListener('click', () => {
  if(isMenuShow === true){
    menu_bar[0].style.transform = "";
    menu_bar[0].style.marginTop = "1rem";
    menu_bar[1].style.opacity = 100;
    menu_bar[2].style.transform = "";
    menu_bar[2].style.marginTop = "5rem";
    isMenuShow = false;
    
    menuWindow[0].style.transform='scale(0)';
  }
  else{
    menu_bar[0].style.transform = "rotate(45deg)";
    menu_bar[0].style.marginTop = "3rem";
    menu_bar[1].style.opacity = 0;
    menu_bar[2].style.transform = "rotate(-45deg)";
    menu_bar[2].style.marginTop = "3rem";
    isMenuShow = true;
    menuWindow[0].style.transform='scale(1)';
    
  }
});


//----------------------SECTION 2 TOUCH SLIDER------------------------------//
let secFirst_slide1 = document.getElementsByClassName('sec-first__card--1')[0];
let secFirst_slide2 = document.getElementsByClassName('sec-first__card--2')[0];
let secFirst_slide3 = document.getElementsByClassName('sec-first__card--3')[0];

function slideSection(el, e) {
  var x = e.changedTouches[0].pageX;
  if (x <= 200) {
    if (el.nextElementSibling.style.transform === null) {
      el.style.transform = 'translateX(0)';
    } else {
      el.style.transform = 'translateX(-110%)';
      el.nextElementSibling.style.transform = 'translateX(0)';
    }
  }
  if (x >= 200) {
    if (el.previousElementSibling.style.transform === null) {
      el.style.transform = 'translateX(0)';
    } else {
      el.style.transform = 'translateX(110%)';
      el.previousElementSibling.style.transform = 'translateX(0)';
    }
  }
}
//-----------------------SECTION 3 MOBILE SLIDER---------------------//

var secThirdPrevious = document.getElementById('sec-third__previous');
var secThirdNext = document.getElementById('sec-third__next');
var secThirdSlides = document.getElementsByClassName('secThirdSlider');
var secThirdPos = 0;
var secThirdDots = document.getElementsByClassName('sec-third__dot');
secThirdPrevious.addEventListener('click', () => {
  mobileSliderPrevious(
    secThirdPrevious,
    secThirdNext,
    secThirdSlides,
    'secThirdPos'
  );
  activeDots('secThirdDots','secThirdPos');
});
secThirdNext.addEventListener('click', () => {
  mobileSliderNext(
    secThirdPrevious,
    secThirdNext,
    secThirdSlides,
    'secThirdPos'
  );
  activeDots('secThirdDots','secThirdPos');
});

//--------------------SECTION SIXTH MOBILE SLIDER---------------------//
var secSixthPrevious = document.getElementById('sec-sixth__previous');
var secSixthNext = document.getElementById('sec-sixth__next');
var secSixthSlides = document.getElementsByClassName('sec-sixth__card');
var secSixthPos = 0;
var secSixthDots = document.getElementsByClassName('sec-sixth__dot');

secSixthPrevious.addEventListener('click', () => {
  mobileSliderPrevious(
    secSixthPrevious,
    secSixthNext,
    secSixthSlides,
    'secSixthPos'
  );
  activeDots('secSixthDots','secSixthPos');
});
secSixthNext.addEventListener('click', () => {
  mobileSliderNext(
    secSixthPrevious,
    secSixthNext,
    secSixthSlides,
    'secSixthPos'
  );
  activeDots('secSixthDots','secSixthPos');
});
//----------------------SECTION SEVENTH MOBILE SLIDER----------------//
var secSeventhPrevious = document.getElementById('sec-seventh__previous');
var secSeventhNext = document.getElementById('sec-seventh__next');
var secSeventhSlides = document.getElementsByClassName('sec-seventh__items');
var secSeventhPos = 0;
var secSeventhDots = document.getElementsByClassName('sec-seventh__dot');
secSeventhPrevious.addEventListener('click', () => {
  mobileSliderPrevious(
    secSeventhPrevious,
    secSeventhNext,
    secSeventhSlides,
    'secSeventhPos'
  );
  activeDots('secSeventhDots','secSeventhPos');
});
secSeventhNext.addEventListener('click', () => {
  mobileSliderNext(
    secSeventhPrevious,
    secSeventhNext,
    secSeventhSlides,
    'secSeventhPos'
  );
  activeDots('secSeventhDots','secSeventhPos');
});

//--------------------MOBILE SLIDER FUNCTIONS---------------------//
function mobileSliderPrevious(Previous, Next, Slides, Pos) {
  console.log(window[Pos], 'Left');
  
  if (window[Pos] !== 0) {
    window[Pos] += 110;
    if (window[Pos] === 0) {
      Previous.style.display = 'none';
    } else {
      Next.style.display = 'block';
    }
    console.log(window[Pos], 'After Click');
    
    Slides[0].style.transform = 'translateX(' + window[Pos] + '%)';
    Slides[1].style.transform = 'translateX(' + (110 + window[Pos]) + '%)';
    Slides[2].style.transform = 'translateX(' + (220 + window[Pos]) + '%)';
  }
}
function activeDots(dot,pos){
  let dotVar = window[dot];
  dotVar[0].classList.remove('dot--active');
  dotVar[1].classList.remove('dot--active');
  dotVar[2].classList.remove('dot--active');
  if(window[pos] === 0)
  {
    dotVar[0].classList.add('dot--active');
  }else if(window[pos] === -110){
    dotVar[1].classList.add('dot--active');
  }
  else if(window[pos] === -220){
    dotVar[2].classList.add('dot--active');
  }
}

function mobileSliderNext(Previous, Next, Slides, Pos) {
  console.log(window[Pos], 'Left');

  if (Slides[2].style.transform !== 'translateX(0%)') {
    window[Pos] -= 110;
    if (window[Pos] === -220) {
      Next.style.display = 'none';
    } else {
      Previous.style.display = 'block';
    }
    console.log(window[Pos], 'After Click');
    Slides[0].style.transform = 'translateX(' + window[Pos] + '%)';
    Slides[1].style.transform = 'translateX(' + (110 + window[Pos]) + '%)';
    Slides[2].style.transform = 'translateX(' + (220 + window[Pos]) + '%)';
  }
}

//-------------SECTION-4 PREMIUM-SLIDER-------------//
var premiumPrevious = document.getElementById('premium__previous');
var premiumNext = document.getElementById('premium__next');
var premiumSlide1 = document.getElementsByClassName('premium__item--1');
var premiumSlide2 = document.getElementsByClassName('premium__item--2');
var premiumflag = 1;
premiumPrevious.addEventListener('click', () => {
  premiumPrevious.style.display = 'none';
  premiumNext.style.display = 'block';
  premiumSlide1[0].style.transform = 'translateX(0%)';
  premiumSlide2[0].style.transform = 'translateX(110%)';
});
premiumNext.addEventListener('click', () => {
  premiumNext.style.display = 'none';
  premiumPrevious.style.display = 'block';
  premiumSlide1[0].style.transform = 'translateX(-110%)';
  premiumSlide2[0].style.transform = 'translateX(0%)';
});

//-----------------------SECTION 4 TABLE SHOW------------------------//

var plus = document.getElementById('sec-fourth-action');

plus.addEventListener('click', showTables);
function showAnswer(el) {
  let answer = el.previousElementSibling.children[0];
  let question = el.previousElementSibling;
  answer.style.display = 'block';
  answer.style.opacity = '1';
  if (window.matchMedia('(max-width: 600px)').matches) {
    question.style.fontSize = '5rem';
    question.style.fontWeight = 'Bold';
    answer.style.fontWeight = 'Normal';
    answer.style.marginTop = '5rem';
  } else {
    question.style.fontSize = '1.8rem';
    answer.style.marginTop = '1.8rem';
  }

  el.style.display = 'none';
  el.nextElementSibling.style.display = 'block';
}
function hideAnswer(el) {
  let answer = el.previousElementSibling.previousElementSibling.children[0];
  let question = el.previousElementSibling.previousElementSibling;
  answer.style.display = 'none';
  answer.style.opacity = '0';
  if (window.matchMedia('(max-width: 600px)').matches) {
    question.style.fontSize = '5rem';
    question.style.fontWeight = 'Normal';
    answer.style.marginTop = '0';
  } else {
    question.style.fontSize = '2rem';
    answer.style.marginTop = '0';
  }
  el.style.display = 'none';
  el.previousElementSibling.style.display = 'block';
}
function showTables() {
  if (plus.innerHTML === '+') {
    plus.innerHTML = '-';
    document.querySelector('.sec-fourth__tables').style.height = 'max-content';
  } else {
    document.querySelector('.sec-fourth__tables').style.height = '0px';
    plus.innerHTML = '+';
  }
}

//---------TERIFF SLIDER---------//

var teriff__next = document.querySelector('.teriff__next');
var teriff__previous = document.querySelector('.teriff__previous');
if (window.matchMedia('(max-width: 600px)').matches) {
  var teriff__cardSize = 20;
} else {
  var teriff__cardSize = 37.4;
}
var teriff__position = 0;
var teriff__indexStart = document.querySelector('.teriff__index--start');
var teriff__indexEnd = document.querySelector('.teriff__index--end');
var teriff__allCards = document.querySelectorAll('.teriff__card');
if (window.matchMedia('(max-width: 600px)').matches) {
  var teriff__sliderSize = teriff__allCards.length - 1;
} else {
  var teriff__sliderSize = teriff__allCards.length % 3;
}
teriff__indexStart.classList.add('teriff__index--start-primary');
var teriff_slider = document.getElementById('teriff__slider');

teriff__next.addEventListener('click', function () {
  nextSlide(
    teriff__sliderSize,
    'teriff__position',
    teriff__cardSize,
    teriff__previous,
    teriff__next,
    teriff__indexEnd,
    teriff__indexStart,
    teriff_slider,
    'teriff__'
  );
  nextDot('teriff__dot dot--active');
});
teriff__previous.addEventListener('click', function () {
  previousSlide(
    teriff__sliderSize,
    'teriff__position',
    teriff__cardSize,
    teriff__previous,
    teriff__next,
    teriff__indexEnd,
    teriff__indexStart,
    teriff_slider,
    'teriff__'
  );
  prevDot('teriff__dot dot--active');
});

//---------TIP SLIDER----------//

var tip__next = document.querySelector('.tip__next');
var tip__previous = document.querySelector('.tip__previous');
if (window.matchMedia('(max-width: 600px)').matches) {
  var tip__cardSize = 25;
} else {
  var tip__cardSize = 48;
}
var tip__position = 0;
var tip__indexStart = document.querySelector('.tip__index--start');
var tip__indexEnd = document.querySelector('.tip__index--end');
var tip__allCards = document.querySelectorAll('.tip__card');
if (window.matchMedia('(max-width: 600px)').matches) {
  var tip__sliderSize = tip__allCards.length - 1;
} else {
  var tip__sliderSize = tip__allCards.length % 2;
}

if (tip__sliderSize === 0) {
  tip__sliderSize = 2;
}
tip__indexStart.classList.add('tip__index--start-primary');
var tip_slider = document.getElementById('tip__slider');


function nextDot(currentDot){
  activeDot = document.getElementsByClassName(currentDot);
  nextDotEl = activeDot[0].nextElementSibling;
  
    activeDot[0].classList.remove('dot--active');
    nextDotEl.classList.add('dot--active');
  
}

tip__next.addEventListener('click', function () {
  nextSlide(
    tip__sliderSize,
    'tip__position',
    tip__cardSize,
    tip__previous,
    tip__next,
    tip__indexEnd,
    tip__indexStart,
    tip_slider,
    'tip__'
  );
  nextDot('tip__dot dot--active');
});

function prevDot(currentDot,dotLast){
  activeDot = document.getElementsByClassName(currentDot);
  nextDotEl = activeDot[0].previousElementSibling;
  
    activeDot[0].classList.remove('dot--active');
    nextDotEl.classList.add('dot--active');
}
tip__previous.addEventListener('click', function () {
  previousSlide(
    tip__sliderSize,
    'tip__position',
    tip__cardSize,
    tip__previous,
    tip__next,
    tip__indexEnd,
    tip__indexStart,
    tip_slider,
    'tip__'
  );
  prevDot('tip__dot dot--active');
});

function nextSlide(
  sliderSize,
  position,
  cardSize,
  previous,
  next,
  indexEnd,
  indexStart,
  slider,
  str
) {
  window[position] -= cardSize;
  console.log(slider);
  if (window[position] >= 0) {
    previous.style.display = 'none';
  } else {
    if (window.matchMedia('(max-width: 600px)').matches) {
      previous.style.display = 'flex';
    } else {
      previous.style.display = 'block';
    }
    indexEnd.classList.remove(str + 'index--end-primary');
  }
  if (window[position] === -cardSize * sliderSize) {
    next.style.display = 'none';
    indexEnd.classList.add(str + 'index--end-primary');
    indexStart.classList.remove(str + 'index--start-primary');
  } else {
    if (window.matchMedia('(max-width: 600px)').matches) {
      next.style.display = 'flex';
    } else {
      next.style.display = 'block';
    }
    indexEnd.classList.remove(str + 'index--end-primary');
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    slider.style.transform = 'translateX(' + window[position] + '%)';
  } else {
    slider.style.transform = 'translateX(' + window[position] + 'rem)';
  }
}
function previousSlide(
  sliderSize,
  position,
  cardSize,
  previous,
  next,
  indexEnd,
  indexStart,
  slider,
  str
) {
  console.log(slider);
  window[position] += cardSize;
  if (window[position] >= 0) {
    previous.style.display = 'none';
    indexStart.classList.add(str + 'index--start-primary');
    indexEnd.classList.remove(str + 'index--end-primary');
  } else {
    if (window.matchMedia('(max-width: 600px)').matches) {
      previous.style.display = 'flex';
    } else {
      previous.style.display = 'block';
    }
  }
  if (window[position] === -cardSize * sliderSize) {
    next.style.display = 'none';
  } else {
    if (window.matchMedia('(max-width: 600px)').matches) {
      next.style.display = 'flex';
    } else {
      next.style.display = 'block';
    }
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    slider.style.transform = 'translateX(' + window[position] + '%)';
  } else {
    slider.style.transform = 'translateX(' + window[position] + 'rem)';
  }
}
