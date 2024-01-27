/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    var numbers = [];
       var isFirstCall = true;
   
       return function () {
         
           if (isFirstCall) {
               numbers.push(n);
               isFirstCall = false; 
           } else {
               n += 1;
               numbers.push(n);
           }
   
           const uniqueNumbers = new Set(numbers);
           const uniqueNumbersArray = [...uniqueNumbers];
           return uniqueNumbersArray[uniqueNumbersArray.length - 1];
       };
   };
   // const counter = createCounter(10)
   /*
    * counter() // 10
    * counter() // 11
    * counter() // 12
    */