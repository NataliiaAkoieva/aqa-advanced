function checkOrder(available, ordered) {
	if (available < ordered) {
		return "Your order is too large, we don't have enough goods.";
	}
	if (ordered === 0) {
		return 'Your order is empty.';
	}
	if (available >= ordered) {
		return 'Your order is accepted.';
	}
}
console.log('Message when available < ordered:', checkOrder(10, 100));
console.log('Message when ordered = 0:', checkOrder(10, 0));
console.log('Message when available > ordered:', checkOrder(10, 9));
console.log('Message when available = ordered:', checkOrder(10, 10));
