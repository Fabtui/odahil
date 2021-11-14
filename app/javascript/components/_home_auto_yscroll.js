const homeAutoYScroll = () => {
  const swiperContainer = document.querySelector('.swiper-container')
  if (swiperContainer) {

    function downScrollToSwiper() {
      const currentPosition = window.scrollY;
      const firstPoint = window.innerHeight*0.7;
      const secondPoint = window.innerHeight;
      if (currentPosition > firstPoint && currentPosition < secondPoint) {
        window.scroll({
          top: window.innerHeight,
          behavior: "smooth"
        });
      }
    }

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let state = window.pageYOffset || document.documentElement.scrollTop;
      if (state > lastScrollTop){
        // scroll down behaviour
        downScrollToSwiper();
      } else {
        // scroll up behaviour
      }
      lastScrollTop = state <= 0 ? 0 : state; // For Mobile or negative scrolling
    }, false);

  }
}

export { homeAutoYScroll }
