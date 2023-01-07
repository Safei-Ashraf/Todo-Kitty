window.addEventListener("DOMContentLoaded", function () {
	//Capture input
	const input = document.querySelector(".form-input");
	const form = document.querySelector("form");
	//get all cats
	let cats = document.querySelectorAll(".cat-img-container");

	//Capture add button
	const addButton = document.querySelector(".form-submit");

	const list = document.querySelector(".list-container ul");

	//Tasks Array:
	let tasks = [];

	//Capture add button click and input value
	form.onsubmit = function (e) {
		e.preventDefault();
	};

	//Check Local Storage:
	if (localStorage.getItem("tasks")) {
		let oldTasks = JSON.parse(localStorage.getItem("tasks"));
		oldTasks.length > 0 && renderTasks(oldTasks);
		tasks = tasks.concat(oldTasks);
	}

	addButton.addEventListener("click", function () {
		if (input.value.length > 0) {
			tasks.push(input.value);
			input.value = "";
			renderTasks(tasks);
			saveTasks(tasks);
		}
	});

	//Render tasks:
	function createTask(text) {
		let taskElem = document.createElement("li");
		let taskText = document.createElement("p");
		taskText.textContent = text;
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Done ✔️";
		deleteButton.classList.add("delete");
		taskElem.appendChild(taskText);
		taskElem.appendChild(deleteButton);
		deleteButton.addEventListener("click", deleteTask);
		return taskElem;
	}

	function renderTasks(tasks) {
		list.innerHTML = "";
		for (let i = tasks.length - 1; i >= 0; i--) {
			list.appendChild(createTask(tasks[i]));
		}
	}

	function saveTasks(tasks) {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	function deleteTask() {
		this.parentElement.remove();
		tasks = tasks.filter((task) => {
			return task !== this.parentElement.textContent.slice(0, -7);
		});
		setTimeout(function () {
			if (tasks.length == 0) {
				list.innerHTML = `	<p>Items will display here...</p>
				<div class="placeholder-cat">
					<img
						src="./cats/cat-sticker-line-sticker.gif"
						alt="cat=sticker"
					/>
				</div>`;
			}
		}, 100);
		revealCat();
		startConfetti();
		callToast();
		setTimeout(() => {
			stopConfetti();
		}, 1000);
		saveTasks(tasks);
	}

	/*Cats' logic */
	let catsCounter = 0;
	function revealCat() {
		cats[shuffledArray[catsCounter] - 1].classList.remove("none");
		catsCounter++;
	}

	//Helper:
	// Returns a random number between min (inclusive) and max (exclusive) => DroidScript.org
	var shuffledArray = [];
	while (shuffledArray.length < cats.length) {
		var r = Math.floor(Math.random() * cats.length) + 1;
		if (shuffledArray.indexOf(r) === -1) shuffledArray.push(r);
	}
});
