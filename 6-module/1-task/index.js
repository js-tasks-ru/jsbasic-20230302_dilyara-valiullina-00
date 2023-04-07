function createElement(html) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper.firstElementChild;
}

export default class UserTable {
  #rows = '';
  constructor(rows) {
    this.#rows =rows;
    this.elem = this.#render();
  }
  #template() {
    return `
    <div class="example">
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
          ${this.#rows.map(row => `
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.salary}</td>
              <td>${row.city}</td>
              <td><button>X</button></td>
            </tr>
          `).join('')}
      </tbody>
      </table>
    </div>`;
  }
  #onMenuClick = (event) => {
    const button = event.target;
    const row = button.closest('tr');
    row.remove();
  };
  #render() {
    const elem = createElement(this.#template());
    elem.addEventListener('click', this.#onMenuClick);
    return elem;
  }
}

