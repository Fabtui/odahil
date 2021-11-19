const showMenu = () => {
  const navTrigger = document.getElementsByClassName('nav-trigger')[0];
  const body = document.getElementsByTagName('body')[0];

  if (navTrigger) {
    navTrigger.addEventListener('click', toggleNavigation);

    function toggleNavigation(event) {
      event.preventDefault();
      body.classList.toggle('nav-open');
    }

    const overlay = document.querySelector('.overlay')
    overlay.addEventListener('click', () => {
      body.classList.remove('nav-open');
    })
  }
}

export { showMenu }
