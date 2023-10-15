const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
	if (event.target.value === "") {
		return (nameOutput.innerHTML = "Anonymous");
	}
	console.log(event.target.value);
	nameOutput.innerHTML = event.target.value;
});
