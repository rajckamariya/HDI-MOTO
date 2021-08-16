function wildfall() {
  document.getElementById('wildFall').src = 'img/animation/Wildunfall.svg';
}
function fahrbahn() {
  document.getElementById('Fahrbahn').src =
    'img/animation/Abkommen_Fahrbahn.svg';
}
function auffahrunfall() {
  document.getElementById('Auffahrunfall').src =
    'img/animation/Auffahrunfall.svg';
}

const a1 = new IntersectionObserver(el=>{
  wildfall();
})
const a2 = new IntersectionObserver(el=>{
  fahrbahn();
})
const a3 = new IntersectionObserver(el=>{
  auffahrunfall();
})

a1.observe(document.querySelector('#wildFall'));
a2.observe(document.querySelector('#Fahrbahn'));
a3.observe(document.querySelector('#Auffahrunfall'));