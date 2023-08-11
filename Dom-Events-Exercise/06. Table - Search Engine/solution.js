function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchQuery = document.querySelector("#searchField").value;

    const cells = Array.from(document.querySelectorAll("tbody td"));

    cells.forEach((c) => {
      c.parentElement.classList.remove("select");
    });

    cells.forEach((c) => {
      if (c.textContent.includes(searchQuery)) {
        c.parentElement.classList.add("select");
      }
    });
  }
}
