// Function Declaration
function rectangleSquareDecl(width, height) {
    return width * height;
}
console.log('Rectangle Square using Function Declaration:', rectangleSquareDecl(5, 10));

// Function Expression
const rectangleSquareExpr = function (width, height) {
    return width * height;
}
console.log('Rectangle Square using Function Expression:', rectangleSquareExpr(5, 10));

// Arrow Function
const rectangleSquareArrow = (width, height) => width * height;

console.log('Rectangle Square using Arrow Function:', rectangleSquareArrow(5, 10));