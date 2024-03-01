// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiplyByPowerOfFive(number) {
    const digits = Math.abs(number).toString().length;
    const powerOfFive = Math.pow(5, digits);
    return number * powerOfFive;
}

console.log(multiplyByPowerOfFive(3));   // Output: 15
console.log(multiplyByPowerOfFive(10));  // Output: 250
console.log(multiplyByPowerOfFive(200)); // Output: 25000
console.log(multiplyByPowerOfFive(0));   // Output: 0
console.log(multiplyByPowerOfFive(-3));  // Output: -15
