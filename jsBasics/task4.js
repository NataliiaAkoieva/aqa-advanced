//4.1
const circleRadius = 2;
const circleArea = Math.PI * Math.pow(circleRadius, 2);
console.log('Circle area:', circleArea);

//4.2
const rectangleLength = 2.589;
const rectangleWidth = 3;
const rectangleArea = rectangleLength * rectangleWidth;
console.log('Rectangle area:', rectangleArea);

//4.3
const cylinderRadius = 2;
const cylinderHeight = 4;
const cylinderVolume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;
console.log('Cylinder volume:', cylinderVolume);

//Rounded values
console.log('Rounded Circle area:', circleArea.toFixed(2));
console.log('Rounded Rectangle area:', rectangleArea.toFixed(2));
console.log('Rounded Cylinder volume:', cylinderVolume.toFixed(2));
