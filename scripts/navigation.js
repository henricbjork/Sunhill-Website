const navItems = document.querySelectorAll('.nav__item');
const contactLink = document.querySelector('.contact__link');
const aboutLink = document.querySelector('.about__link');
const merchLink = document.querySelector('.merch__link');
const contactSection = document.querySelector('.contact');
const aboutSection = document.querySelector('.about');
const merchSection = document.querySelector('.merch');

// navItems.forEach(navItem => {

//   navItem.addEventListener('click', e => {
//     if (e.target == 'a.nav__item.contact__link');
//     {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (e.target == 'a.nav__item.about__link');
//     {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (e.target == 'a.nav__item.merch__link');
//     {
//       merchSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

contactLink.addEventListener('click', e => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});
aboutLink.addEventListener('click', e => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
merchLink.addEventListener('click', e => {
  merchSection.scrollIntoView({ behavior: 'smooth' });
});
