const averageGrade = 100;
if (averageGrade < 60) {
	console.log('Unsatisfactorily');
} else if (averageGrade <= 70) {
	console.log('Satisfactorily');
} else if (averageGrade <= 80) {
	console.log('Good');
} else if (averageGrade <= 90) {
	console.log('Very good');
} else if (averageGrade <= 100) {
	console.log('Perfectly');
} else {
	console.log('Wrong score');
}
