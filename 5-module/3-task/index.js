function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const slideWight = carouselInner.offsetWidth;
  let currentPosition = 0;

  function checkBorders() {
    if (currentPosition === 0) {
      carouselArrowLeft.style.display = 'none';
    }
    else if (currentPosition === -slideWight * 3) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
      carouselArrowRight.style.display = '';
    }
  }

  carouselArrowLeft.addEventListener('click', () => {
    if (currentPosition !== 0 ) {
      currentPosition += slideWight;
      carouselInner.style.transform = `translateX(${currentPosition}px)`;
      checkBorders();
    }
  })

  carouselArrowRight.addEventListener('click',() => {
    if (currentPosition !== -slideWight * 3) {
      currentPosition -= slideWight;
      carouselInner.style.transform = `translateX(${currentPosition}px)`
      checkBorders();
    }
  })

  checkBorders();

}
