const backImageScroll = () => {
  // when bottom of window hit bottom of div backgroud go down depending on the scroll value
  const backImage = document.querySelector('.back-image')
  
  if (backImage) {
    const backImageTop = backImage.offsetTop;
    const backImageBottom = backImageTop + backImage.offsetHeight;
    const windowHeight = window.innerHeight;
    window.addEventListener('scroll', (e) => {
      const topWindow =  window.pageYOffset;
      const bottomWindow = window.pageYOffset + window.innerHeight
      let offSet = -((backImageBottom - bottomWindow)*1.4 / windowHeight) * 100
      if (bottomWindow > backImageBottom) {
        if (topWindow > backImageTop) {
          return
        } else {
          backImage.style.backgroundPositionY = (`${offSet}%`);
        }
      }
    })
  }
}

export { backImageScroll };
