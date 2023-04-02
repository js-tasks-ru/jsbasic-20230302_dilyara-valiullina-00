function highlight(table) {
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      if (cell.hasAttribute("data-available")) {
        if (cell.getAttribute('data-available') === 'true') {
          rows[i].classList.add('available');
        }
        else if (cell.getAttribute('data-available') === 'false') {
          rows[i].classList.add('unavailable');
        }}
        else {
          rows[i].setAttribute('hidden', '') }
        if (cell.cellIndex === 2) {
        if (cell.innerHTML === 'm') {
          rows[i].classList.add('male');
        }
        else if (cell.innerHTML === 'f') {
          rows[i].classList.add('female');
        }
      }
      else if (cell.cellIndex === 1 && parseInt(cell.innerHTML, 10) < 18) {
        rows[i].style.textDecoration = 'line-through';
      }
    }
  }
}
