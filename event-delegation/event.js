 const list = document.getElementById("list");

  function add() {
    const input = document.getElementById("input");
    if (!input.value) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${input.value}</span>
      <button class="complete">✔</button>
      <button class="delete">❌</button>
    `;

    list.appendChild(li);
    input.value = "";
  }

  // ✅ Event Delegation (one listener)
  list.addEventListener("click", function(e) {

    // Delete action
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
    }

    // Complete action
    if (e.target.classList.contains("complete")) {
      e.target.parentElement.classList.toggle("done");
    }

  });
