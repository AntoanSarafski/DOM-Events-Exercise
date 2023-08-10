function create(words) {
  const container = document.querySelector("#content");

  words.forEach((w) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = w;
    p.style.display = "none";

    div.appendChild(p);

    div.addEventListener("click", () => {
      p.style.display = "block";
    });

    container.appendChild(div);
  });
}
