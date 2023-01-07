//Capture input
const input = document.querySelector(".form-input");
const form = document.querySelector("form");

//Capture add button
const addButton = document.querySelector(".form-submit");
const list = document.querySelector(".list-container ul");

//Tasks Array:
const tasks = ["clean room", "clean soul"];

//Capture add button click and input value
form.onsubmit = function (e) {
	e.preventDefault();
};
addButton.addEventListener("click", function (e) {
	if (input.value.length > 0) {
		console.log(input.value);
	}
});

//render tasks:

function createTask(text) {
	let taskElem = document.createElement("li");
	let taskText = document.createElement("p");
	taskText.textContent = text;
	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.classList.add("delete");
	taskElem.appendChild(taskText);
	taskElem.appendChild(deleteButton);
	return taskElem;
}

list.appendChild(createTask("dirty"));
console.log(list);
