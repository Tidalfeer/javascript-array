let myArray = [64, 'Wizard', 'Cleric', 25, 'Bard'];
console.log("Array declared: ", myArray);

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];
const middleElement = myArray[Math.floor(myArray.length / 2)];

console.log("First Element: ", firstElement);
console.log("Last Element: ", lastElement);
console.log("Middle Element:", middleElement);

const arrayLenght = myArray.length;
console.log("Array Length: ", array.length);

myArray.push('newElement');
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift('FirstNewElement');
console.log(myArray);

myArray.shift();
console.log(myArray);

for(let x = 0; x < myArray.length; x++) {
    console.log("Element at index", x, "is", myArray[x]);
}

myArray.forEach((element, index) => {
    console.log("forEach element at index", index, "is", element);
});

const [first, second,...rest] = myArray;
console.log(first);
console.log(second);
console.log(rest);

