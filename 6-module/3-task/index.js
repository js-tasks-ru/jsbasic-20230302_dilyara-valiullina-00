function createElement(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper.firstElementChild;
}

export default class Carousel {
  #slides = '';
  #slideWidth = 0;
  #currentSlide = 0;

  constructor(slides) {
    this.#slides = slides;
    this.elem = this.#render();
  }

  #template() {
    const slidesHtml = this.#slides.map(slide => `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `).join('');

    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">${slidesHtml}</div>
      </div>
    `;
  }

  #onClick = (event) => {
    const slideId = event.currentTarget.closest('.carousel__slide').dataset.id;
    const customEvent = new CustomEvent("product-add", {
      detail: slideId,
      bubbles: true
    });
    event.currentTarget.dispatchEvent(customEvent);
  }

  #initCarouselRight = () => {
    const inner = this.elem.querySelector('.carousel__inner');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const maxSlide = slides.length - 1;
    this.#slideWidth = inner.offsetWidth;
    if (this.#currentSlide !== -this.#slideWidth * maxSlide) {
      this.#currentSlide -= this.#slideWidth;
      inner.style.transform = `translateX(${this.#currentSlide}px)`;
    }
    this.#checkBorders();
  }

  #checkBorders() {
    const inner = this.elem.querySelector('.carousel__inner');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const maxSlide = slides.length - 1;
    this.#slideWidth = inner.offsetWidth;
    if (this.#currentSlide === 0) {
      this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
    }
    else if (this.#currentSlide === -this.#slideWidth * maxSlide) {
      this.elem.querySelector('.carousel__arrow_right').style.display = 'none';
    } else {
      this.elem.querySelector('.carousel__arrow_left').style.display = '';
      this.elem.querySelector('.carousel__arrow_right').style.display = '';
    }
  }
  #initCarouselLeft = () => {
    const inner = this.elem.querySelector('.carousel__inner');
    this.#slideWidth = inner.offsetWidth;
    if (this.#currentSlide !== 0) {
      this.#currentSlide += this.#slideWidth;
      inner.style.transform = `translateX(${this.#currentSlide}px)`;
    }
    this.#checkBorders();
  }

  #render() {
    const elem = createElement(this.#template());
    const slides = elem.querySelectorAll('.carousel__slide');
    elem.querySelector('.carousel__arrow_left').style.display = 'none';

    slides.forEach(slide => {
      slide.addEventListener('click', this.#onClick);
    });
    elem.querySelector('.carousel__arrow_right').addEventListener('click', this.#initCarouselRight);
    elem.querySelector('.carousel__arrow_left').addEventListener('click', this.#initCarouselLeft);


    return elem;
  }
}

