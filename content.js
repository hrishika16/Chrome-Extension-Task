(function () {
	const connectButtons = document.querySelectorAll(".artdeco-button__text");

	// Iterate over each button and click it after a random wait time
	connectButtons.forEach((button) => {
		setTimeout(() => {
			let temp = button.innerText;
			if (temp === "Connect") button.click();
		}, Math.floor(Math.random() * 5000) + 5000);
	});
})();
