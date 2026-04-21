 const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("taskList");

    // ADD TASK
    addBtn.addEventListener("click", () => {
      if (input.value.trim() === "") return;

      const li = document.createElement("li");
      li.innerHTML = `
        <span>${input.value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;

      list.appendChild(li);
      input.value = "";
    });

    // EVENT DELEGATION
    list.addEventListener("click", (e) => {
      const li = e.target.parentElement;

      // DELETE
      if (e.target.classList.contains("delete")) {
        li.remove();
      }

      // EDIT
      if (e.target.classList.contains("edit")) {
        const span = li.querySelector("span");
        const newText = prompt("Edit task:", span.textContent);
        if (newText) span.textContent = newText;
      }
    });
