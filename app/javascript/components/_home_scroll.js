const homeScroll = () => {
  const title = document.querySelector('#home-title')
  if (title) {
    title.addEventListener('click', (e) => {
      window.scroll({
          top: window.innerHeight,
          behavior: "smooth"
        });
    })
  }
}

export { homeScroll };
