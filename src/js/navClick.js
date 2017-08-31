const mobileNavClick = () => {
  let mobileNav = document.querySelector('.nav-mobile');

  console.log('clicked');
  mobileNav.classList.toggle('nav-mobile-display');
}

export default mobileNavClick;
