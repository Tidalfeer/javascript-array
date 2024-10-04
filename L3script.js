new Array = myArray;
const myArray = [64, 'Wizard', 'Cleric', 25, 'Bard'];
console.log("Array declared: ", myArray);

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];
const middleElement = myArray[Math.floor(myArray.length / 2)];

console.log("First Element: ", firstElement);
console.log("Last Element: ", lastElement);
console.log("Middle Element:", middleElement);

const arrayLenght = myArray.length;
console.log("Array Length: ", arraylenght);

myArray.push('newElement');
console.log("After push: ", myArray);

myArray.pop();
console.log("After pop:" ,myArray);

myArray.unshift('startElement');
console.log("After unshift: ", myArray);

myArray.splice(2,1, 'modifiedElement');
console.log("After splice ",myArray);

for(let x = 0; x < myArray.length; x++) {
    console.log("Element at index", x, "is", myArray[x]);
}

myArray.forEach((element, index) => {
    console.log("forEach element at index", index, "is", element);
});

const [first, second,...rest] = myArray;
console.log("First element via destructuring: ", first);
console.log("Second element via destructuring: ", second);
console.log("Remaining elements via rest: ", rest);

