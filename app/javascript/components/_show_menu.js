const showMenu = () => {
  console.log('ok')
  const navTrigger = document.getElementsByClassName('nav-trigger')[0];
  console.log(navTrigger)
  const body = document.getElementsByTagName('body')[0];

  if (navTrigger) {
    navTrigger.addEventListener('click', toggleNavigation);

    function toggleNavigation(event) {
      event.preventDefault();
      body.classList.toggle('nav-open');
    }
  }
}

export { showMenu }
