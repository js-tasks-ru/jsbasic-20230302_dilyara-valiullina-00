function makeDiagonalRed(table) {
  for (i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
