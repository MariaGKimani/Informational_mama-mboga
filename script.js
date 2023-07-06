'use strict'
//Sticy nav
const sectionGoalsEl = document.querySelector(".main-section");
const obs = new IntersectionObserver( function(entries) {
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove('sticky')
  }
},
{
  root: null,
  threshold: 0,
  rootMargin: '-40px',
});
obs.observe(sectionGoalsEl);
