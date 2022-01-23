const homeScroll = () => {
  const title = document.querySelector('#home-title')
  if (title) {
    const homeBanner = document.querySelector('.home-page-container')
    title.addEventListener('click', (e) => {
      window.scroll({
          top: homeBanner.offsetHeight,
          behavior: "smooth"
        });
    });
    const logo = document.querySelector('.home-logo')
    logo.addEventListener('click', (e) => {
      e.preventDefault
      window.scroll({
          top: 0,
          behavior: "smooth"
    });
    })
  }
}

export { homeScroll };
