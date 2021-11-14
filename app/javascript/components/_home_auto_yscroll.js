const homeAutoYScroll = () => {
  const swiperContainer = document.querySelector('.swiper-container')
  if (swiperContainer) {

    function downScrollToSwiper() {
      const currentPosition = window.scrollY;
      const firstPoint = window.innerHeight*0.8;
      const secondPoint = window.innerHeight;
      if (currentPosition > firstPoint && currentPosition < secondPoint) {
        window.scroll({
          top: window.innerHeight,
          behavior: "smooth"
        });
      }
    }

    function downUpToTop() {
      const currentPosition = window.scrollY;
      const firstPoint = 0;
      const secondPoint = window.innerHeight*0.2;
      if (currentPosition > firstPoint && currentPosition < secondPoint) {
        window.scroll({
          top: firstPoint,
          behavior: "smooth"
        });
      }
    }

    let lastScrollTop = 0;

    function scrollDirection() {
      let state = window.pageYOffset || document.documentElement.scrollTop;
      if (state > lastScrollTop){
        // scroll down behaviour
        downScrollToSwiper();
      } else {
        downUpToTop()
      }
      lastScrollTop = state <= 0 ? 0 : state; // For Mobile or negative scrolling
    }


    window.addEventListener("scroll", scrollDirection, false);
  }
}

export { homeAutoYScroll }
