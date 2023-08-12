function solve() {
  const button = document.querySelector("#exercise button");
  button.addEventListener("click", parseFurnitureInput);
}

function parseFurnitureInput() {
  const input = JSON.parse(document.querySelector("#exercise textarea").value);
  console.log(input);
  const tableBody = document.querySelector("tbody");

  input
    .map((furniture) => {
      const row = document.createElement("tr");

      const priceCell = document.createElement("td");
      priceCell.textContent = furniture.price;

      const decorationFactorCell = document.createElement("td");
      decorationFactorCell.textContent = furniture.decFactor;

      row.appendChild(createImageCell(furniture.img));
      row.appendChild(createTextCell(furniture.name));
      row.appendChild(createTextCell(furniture.price));
      row.appendChild(createTextCell(furniture.decFactor));
      row.appendChild(createCheckboxCell());

      return row;
    })
    .forEach((row) => tableBody.appendChild(row));
}

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
