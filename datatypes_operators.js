let intNum = 15;
let floatNum = 4.5;


let addition = intNum + floatNum;
let subtraction = intNum - floatNum;
let multiplication = intNum * floatNum;
let division = intNum / floatNum;
let modulus = intNum % 2; 
let exponentiation = intNum ** 2; 


console.log("Integer:", intNum);
console.log("Float:", floatNum);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);



let compare1 = 10 > 5;
let compare2 = 10 === 5;
console.log("10 > 5 is", compare1);
console.log("10 === 5 is", compare2);


let x = 8;
let y = 12;


console.log("Is x greater than y?", x > y);          
console.log("Is x less than or equal to y?", x <= y); 
console.log("Is x equal to y?", x === y);             
console.log("Is x not equal to y?", x !== y);        


let a = true;
let b = false;


console.log("a AND b:", a && b); 
console.log("a OR b:", a || b); 
console.log("NOT a:", !a);     


let p = 10;

p += 5; 
console.log("p += 5:", p); 

p -= 3; 
console.log("p -= 3:", p); 

p *= 2; 
console.log("p *= 2:", p); 

p /= 4; 
console.log("p /= 4:", p); 

p %= 4; 
console.log("p %= 4:", p); 