function solve() {
  const button = document.querySelector("#exercise button");
  button.addEventListener("click", parseFurnitureInput);
}

function parseFurnitureInput() {
  const input = JSON.parse(document.querySelector("#exercise textarea").value);
  console.log(input);
  const tableBody = document.querySelector("tbody");
  const cellCreator = createCellCreator();

  input
    .map(cellCreator.createFurnitureRow)
    .forEach((row) => tableBody.appendChild(row));
}

function createCellCreator() {
  function createImageCell(src) {
    const imageCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = src;
    imageCell.appendChild(img);
    return imageCell;
  }
  function createTextCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
  }
  function createCheckboxCell() {
    const checkCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkCell.appendChild(checkbox);

    return checkCell;
  }

  return {
    createFurnitureRow(furniture) {
      const row = document.createElement("tr");

      row.appendChild(createImageCell(furniture.img));
      row.appendChild(createTextCell(furniture.name));
      row.appendChild(createTextCell(furniture.price));
      row.appendChild(createTextCell(furniture.decFactor));
      row.appendChild(createCheckboxCell());

      return row;
    },
  };
}
