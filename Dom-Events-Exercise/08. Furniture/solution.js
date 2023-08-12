function solve() {
  const button = document.querySelector("#exercise button");
  button.addEventListener("click", parseFurnitureInput);
}

function parseFurnitureInput() {
  const input = JSON.parse(document.querySelector("#exercise textarea").value);
  console.log(input);
  const tableBody = document.querySelector("tbody");

  input.map(createFurnitureRow).forEach((row) => tableBody.appendChild(row));
}

function createFurnitureRow(furniture) {
  const row = document.createElement("tr");

  row.appendChild(cellCreator.createImageCell(furniture.img));
  row.appendChild(cellCreator.createTextCell(furniture.name));
  row.appendChild(cellCreator.createTextCell(furniture.price));
  row.appendChild(cellCreator.createTextCell(furniture.decFactor));
  row.appendChild(cellCreator.createCheckboxCell());

  return row;
}

const cellCreator = {
  createImageCell(src) {
    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = src;
    imageCell.appendChild(img);
    return imageCell;
  },
  createTextCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
  },
  createCheckboxCell() {
    const checkCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkCell.appendChild(checkbox);

    return checkCell;
  },
};
