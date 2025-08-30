function handleNum(num, onEvenCb, onOddCb) {
	if (num % 2 === 0) {
		onEvenCb();
	} else {
		onOddCb();
	}
}

function handleEven() {
	console.log(`${num} is even`);
}

function handleOdd() {
	console.log(`${num} is odd`);
}

let num = Date.now();
handleNum(num, handleEven, handleOdd);
