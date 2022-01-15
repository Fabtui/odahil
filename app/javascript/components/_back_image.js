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
        console.log('start')
        console.log(bottomWindow);
        if (topWindow > backImageTop) {
          console.log('stop');
          console.log(topWindow);
        } else {
          console.log(`${Math.floor(offSet)}%`);
        // console.log(`${offSet}%`)
          backImage.style.backgroundPositionY = (`${offSet}%`);
          // 0% => windowBottom = backImageBottom || 100% windowTop = backImageTop
          // we want 0 to 100

        }
      }
    })
  }
}

export { backImageScroll };
