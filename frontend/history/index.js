function flipColumn(columnNumber) {
  const column = document.querySelector(`.column:nth-child(${columnNumber})`);
  column.classList.toggle("flipped");
}
