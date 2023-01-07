const quotes = [
	"Mashallah 👏",
	"One down 😉",
	"Good job ❤️",
	"Mashallah ❤️",
	"So proude of your work!🥺",
	"Nice work! ❤️",
	"How Awesome 😉",
	"Amazing!!🎉",
	"Wow Mashallah ❤️",
];
let qCounter = 0;

//Helper:
// Returns a random number between min (inclusive) and max (exclusive) => DroidScript.org
var shuffledArray = [];
while (shuffledArray.length < quotes.length) {
	var r = Math.floor(Math.random() * quotes.length) + 1;
	if (shuffledArray.indexOf(r) === -1) shuffledArray.push(r);
}

//W3c//
function callToast() {
	// Get the snackbar DIV
	let toast = document.getElementById("snackbar");
	// Add the "show" class to DIV
	toast.className = "show";
	toast.textContent = quotes[shuffledArray[qCounter] - 1];
	qCounter++;
	if (qCounter >= quotes.length - 1) qCounter = 0;
	// After 3 seconds, remove the show class from DIV
	setTimeout(function () {
		toast.className = toast.className.replace("show", "");
	}, 4000);
}
