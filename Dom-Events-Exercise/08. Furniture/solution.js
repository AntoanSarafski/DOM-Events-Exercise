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

      const imageCell = document.createElement("td");
      const img = document.createElement("img");
      img.src = furniture.img;
      imageCell.appendChild(img);

      const nameCell = document.createElement("td");
      nameCell.textContent = furniture.name;

      const priceCell = document.createElement("td");
      priceCell.textContent = furniture.price;

      const decorationFactorCell = document.createElement("td");
      decorationFactorCell.textContent = furniture.decFactor;

      const checkCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkCell.appendChild(checkbox);

      row.appendChild(imageCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decorationFactorCell);
      row.appendChild(checkCell);

      return row;
    })
    .forEach((row) => tableBody.appendChild(row));
}
