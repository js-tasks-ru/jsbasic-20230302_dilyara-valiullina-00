
function createElement(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper.firstElementChild;
}

export default class ProductCard {

 #product = '';
  constructor(product) {
    this.#product = product;
    this.elem = this.#render();
  }

  #template() {
    return `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${this.#product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.#product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.#product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
  `;
  }

  #onClick = (event) => {
    const customEvent = new CustomEvent("product-add", {
      detail: this.#product.id,
      bubbles: true
    });
    event.currentTarget.dispatchEvent(customEvent);
  }

  #render() {
    const elem = createElement(this.#template());
    elem.querySelector('.card__button').addEventListener('click', this.#onClick.bind(this));
    return elem;
  }

}
