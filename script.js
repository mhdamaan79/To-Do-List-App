let input = document.querySelector(".input-list");
let addBtn = document.querySelector(".add-btn");
let tasks = document.querySelector(".tasks-box");



// add button disabled for empty input

input.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    addBtn.ClassList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});



// add new item to list

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItemList = document.createElement("div");

    newItemList.classList.add("item");
    newItemList.innerHTML = `<span>${input.value}</span>`;

    const itemBtn = document.createElement("div");
    itemBtn.classList.add("item-btn");
    itemBtn.innerHTML = `<div><i class="fa-solid fa-pen-to-square" style="color: #00DDFF"></i>
    <i class="fa-solid fa-xmark" style="color: #ff1d58"></i></div>`;

    newItemList.appendChild(itemBtn);
    tasks.appendChild(newItemList);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});



// delete items from list

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-xmark")) {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});



// completed items in list

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-pen-to-square")) {
    event.target.parentElement.parentElement.parentElement.classList.toggle("completed");
  }
});