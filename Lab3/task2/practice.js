const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
      <button class="checkbox"></button>
      <span>${taskText}</span>
      <button class="delete">X</button>
    `;

  li.querySelector(".checkbox").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  taskList.prepend(li);
  input.value = "";
}
