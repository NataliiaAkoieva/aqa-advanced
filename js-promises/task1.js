function delayedText(text, ms) {
	setTimeout(() => {
		console.log(text);
	}, ms);
}

delayedText('Good morning!', 3000);
