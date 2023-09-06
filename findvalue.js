let numbers = [4, 8, 14, 30, 24, 45];

let findValue = numbers.find((value) => {
   return value > 20;
});

console.log(`The value found is: ${findValue}`);