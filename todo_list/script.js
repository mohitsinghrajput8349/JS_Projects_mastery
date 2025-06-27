const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;

        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
