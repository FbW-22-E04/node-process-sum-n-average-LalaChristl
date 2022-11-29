console.log("------1. Calculating the sum------");

console.log("argsv sum is", process.argv.slice(2));

let total = 0;

function sum() {
  for (let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
  }
}
sum();
console.log(`sum is ${total}`);

console.log("------2. Calculating the average------");

console.log("argsv avg is", process.argv.slice(2)
);

let total2 = 0;
let average = 0;

function divide() {
  for (let i = 2; i < process.argv.length; i++) {
    total2 += Number(process.argv[i]);
  }
  average = total2 / process.argv.slice(2).length;
}
divide();
console.log(`average is ${average}`);

// console.log("------3. Wrong operation name------");

// console.log("argsv oops is", process.argv.slice(2)
// );
// console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`);

if (process.argv[2] === 'sum'){
    console.log(sum());
}
else if (process.argv[2] === 'avg'){
    divide();
}
