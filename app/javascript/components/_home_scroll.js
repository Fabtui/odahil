const homeScroll = () => {
  const title = document.querySelector('#home-title')
  const homeBanner = document.querySelector('.home-page-container')
  if (title) {
    title.addEventListener('click', (e) => {
      window.scroll({
          top: homeBanner.offsetHeight,
          behavior: "smooth"
        });
    })
  }
}

export { homeScroll };
