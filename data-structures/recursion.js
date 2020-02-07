// Recursion

// example 1: countdown
const iterativeCountdown = n => {
  for (let i = n; i >= 0; i--) {
    console.log('iterative:', i);
  }
};

const recursiveCountdown = n => {
  console.log('recursive:', n);
  if (n === 0) {  // base case to exit recursive loop
    return 0;  // can be return without 0 as well
  } else {
    return recursiveCountdown(n - 1);  // recursive case with different input
  }
}

const iCountdown = iterativeCountdown(5);
const rCountdown = recursiveCountdown(5);

// Design pattern- helper method recursion
// inner recursion function, outer function to hold values
const helperCollectOddValues = arr => {
  const result = [];  // stores value in functions outer most scope
  
  const helper = input => {  // recursive helper function calls itself in inner scope
    if (input.length === 0) return;  // base case aka terminating case
    if (input[0] % 2 !== 0) result.push(input[0]);  //  check for odd and manipulate outer scope data
    helper(input.slice(1));  // call itself, slicing one thing off the array, every call over till its empty (hitting base case)
  }

  helper(arr);  // helper method avoids result value being reset every time, since it has its own scope on stack
  return result;
}

const hOddValuesResult = helperCollectOddValues([1,2,3,4,5,6,7,8,9]);
console.log('hOddValuesResult:', hOddValuesResult);

// Design pattern- pure recursion while storing values
const pureCollectOddValues = arr => {
  let newArr = [];

  if (arr.length === 0) return newArr;  // base case
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);  // recursive case- check for odd numbers

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1))); // recursively call function with 1 less element and concatendates all newArr instance into one array.
  return newArr;  // return new array when recursive calls are solved
};

const pOddValuesResult = pureCollectOddValues([1,2,3,4,5,6,7,8,9]);
console.log('pOddValuesResult:', pOddValuesResult);


/* 
Pure recursion tips:
1. use methods like slice(), spread operator (...), concat
to make copies of arrays and not mutate them
since they will be overwritten, instead of added to call stack

2. Strings are immutable, so you need to use methods like
slice(), substr(), or substring().

3. To make copies of objects, use Object.assign 
or spread operator (...).
*/

// recursion challenges
// Power
/*
Write a recursive function called power().
It takes a base and exponent
and return its the power of the base to the exponent.
It should mimic the functionality of Math.pow().
Don't worry about negative bases or exponents.
*/

const iterativePower = (base, exponent) => {
  let result = 1;  // need to start with 1 (identity property). If 0, will always be 0
  for (let i = 1; i <= exponent; i++) {  // do step i times starting at 1 up to exponent. If at 0, we get an extra step
    result *= base; // multiply result by base
  }
  return result;
}

// recursive solution
const power = (base, exponent) => {
  if (exponent === 0) return 1;  // base case
  else return base * power(base, exponent - 1);  // recursive case
}

const powerResult = power(2, 8);
console.log('powerResult: ', powerResult);

const iterativePowerResult = iterativePower(2,8);
console.log('iterativePowerResult: ', iterativePowerResult);

const mathPowerResult = Math.pow(2, 8);
console.log('mathPowerResult: ', mathPowerResult);


// Factorials
/*
Write a recursive function to find the factorial of a provided number.
It accepts a number, and returns the factorial of that number.
A factorial is a product of all numbers between 0...n.
4! === 24
0! === 1
*/
const iterativeFactorial = n => {
  let product = 1;
  for(let i = n; i > 1; i--) {
    product *= i;
  }
  return product;
}

const recursiveFactorial = n => {  // once understood, this reads simpler
  if (n === 0 || n === 1) return 1; // base case aka terminating case, can't be 0 because n * 0 === 0
  else return n * recursiveFactorial(n - 1);  // recursive case
}

const rFactorialResult = recursiveFactorial(5);  // 120
const iFactorialResult = iterativeFactorial(5);  // 120

console.log('recursive factorial result:', rFactorialResult);
console.log('iterative factorial result:', iFactorialResult);

// Product of array
/*
Write a recursive function that takes in an array 
and returns the product of them all 
*/

const iterativeProductOfArray = arr => {
  let result = 1;  // needs to be 1, identity property
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

const recursiveProductOfArray = arr => {
  const helper = (helperArr, n) => {
    if (arr.length === 0) return 1;  // return 1 to not alter final result, since if we return by itself, undefined will return and we will get NaN (not a number)
    else { 
      let newNum = arr.pop();  // remove and return number, but won't get to element 0. Since we remove and declare we are off. 
      return n * helper(arr, newNum);  // multiply n by n - 1 until arr[1]. Chicken and egg problem by removing AND assigning new value. Get around it by passing in 1st value
    }
  }
  return helper(arr, arr[0]); // element 0 passed in, since recursion doesn't reach it
}

const iProductOfArrayResult = iterativeProductOfArray([20, 3, 4, 7]);
console.log('iProductOfArrayResult: ', iProductOfArrayResult);

const rProductOfArrayResult = recursiveProductOfArray([20, 3, 4, 7]);
console.log('rProductOfArrayResult: ', rProductOfArrayResult);


// Recursive Range
/*
Write a recursive function which accepts a number (n)
and adds up all the numbers from 0 to n.
*/

// example 2: sumRange
const iterativeSumRange = n => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const recursiveSumRange = n => {
  if (n === 1) {  // base case: if 1, stop. Then stack will use 1 to add to all the other numbers
    return 1;     // could be return 0, but adding by 0 results in same number. Makes more intuitive sense to add 0 though
  } else {
    return  n + recursiveSumRange(n - 1);  // recursive call. Basically, adding it all backwards. n + whatever n is next
  }
}

const iSumRangeResult = iterativeSumRange(5);
console.log('iSumRangeResult:', iSumRangeResult);  // 15

const rSumRangeResult = recursiveSumRange(5);
console.log('rSumRangeResult:', rSumRangeResult);  // 15

// fibbinaci sequence
/*
Write a function which accepts a number
and returns the nth number in the Fibonacci sequence. 
The sequence starts with 0, 1, 1, 2, 3, 5, 8 ... nth number.
Every number after 1, 1 is the sum of the previous two number.
So num is the sum of (num-1) + (num-2). 
*/
// start with 1, 1. Add n + n+1 continiously
// 1, 1, 2, 3, 5, 8, 13 ... 
const iterativeFibonacci = n => {
  let arr = [0, 1];  // array acts as stack. Holds numbers necessary to begin
  for (let i = 2; i < n + 1; i++){  // start at 2 since adding n - 2 + n -1
    arr.push(arr[i - 2] + arr[i -1])  // if starts at 1 or 0, will be out of array range
   }
   return arr[n];
}

// more intuitive to do it this way
const recursiveFibonacci = n =>  {
  if (n < 2){  // if its 1 then return
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);  // add all numbers in call stack starting at 1, upward
}

const iFibbonacciResult = iterativeFibonacci(12);  // 144
const rFibbonacciResult = recursiveFibonacci(12);  // 144

console.log('iterative fibbinacci result', iFibbonacciResult);
console.log('recursive fibbinacci result', rFibbonacciResult);

// reverse
// reverse the string input recursively
const iterativeReverse = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
};

const recursiveReverse = str => {
  let result = '';

  const helper = (inputStr) => {
    if (inputStr.length === 0) return '';
    result += inputStr.slice(-1);
    return helper(inputStr.slice(0, -1));
  }

  helper(str);

  return result;
};

const iReverseResult = iterativeReverse('Apple')  //ellppA
console.log('iReverseResult: ', iReverseResult);

const rReverseResult = recursiveReverse('Apple')  //ellppA
console.log('rReverseResult: ', rReverseResult);

// isPalindrome
/*
Checks if input string is a palindrome.
A pallindrome is a word that reads the same if reversed.

Ex.
boob === boob       <- true
tacocat === tacocat <- true
foobar === foobar   <- false

I'd use the recursive solution above and just check if
str === recursiveReverse(str)
*/

// iterative solution
const iterativeIsPalindrome = str => {
  if (typeof str !== 'string' || str === '') return false;  // check if string or empty string
  return str === iterativeReverse(str);
}

const iIsPalindromeResult = iterativeIsPalindrome('tacocat');
console.log('iIsPalindromeResult: ', iIsPalindromeResult);

// recursive solution
const recursiveIsPalindrome = str => {
  if (typeof str !== 'string' || str === '') return false;  // check if string or empty string
  if (str.length === 1) return true; // I and a are words. So technically they count
  return str === recursiveReverse(str);
}

const rIsPalindromeResult = recursiveIsPalindrome('tacocat');
console.log('rIsPalindromeResult: ', rIsPalindromeResult);

// SomeRecursive
/*
Implement a recursive version of the .some() array method
Takes an array, and a callback method.
If any of the elements return true while being passed into
call back method, entire function returns true.
Else, false
*/

const isOdd = n => {  // check if its odd
  return n % 2 !== 0;
}

const isEven = n => {
  return n % 2 === 0;
}

const iterativeSome = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true;
  }
  return false;
}

const recursiveSome = (arr, callback) => {
  if (arr.length === 0) return false;  // base case aka terminating condition
  else if (callback(arr[arr.length-1])) return true; // if last item in array is true, return true
  return recursiveSome(arr.slice(0, -1), callback);  // else, try again via recursion. Remove from back to avoid re-indexing array. O(n) if removed from front. O(n) indexing * O(n) of loop is O(n^2). Not good
}

const iSomeResultIsOdd = iterativeSome([2,3,4,1], isOdd);    // true
console.log('iSomeResult- IsOdd: ', iSomeResultIsOdd);
const iSomeResultIsEven = iterativeSome([1,3,7,9], isEven);  // false
console.log('iSomeResult- IsEven: ', iSomeResultIsEven);

const rSomeResultIsOdd = recursiveSome([2,2,4,4], isOdd);    // false
const rSomeResultIsEven = recursiveSome([1,2,3,4], isEven);  // true
console.log('rSomeResult- IsOdd: ', rSomeResultIsOdd);
console.log('rSomeResult- IsEven: ', rSomeResultIsEven);


// flatten
/*
Write a recursive function that flattens 
a two dimensional array (array of arrays) 
into a one dimensional array
*/

// old code. standard, but not as elegant
const iterativeFlattenOld = arr => {
  let result = [];

  const innerLoop = xArr => {
    for(let j = 0; j < xArr.length; j++) { 
      result.push(xArr[j]);
    }
  }

  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    Array.isArray(element) 
      ? innerLoop(element)
      : result.push(element)
  }

  return result;
}

// using forEach() array iterators, I can loop eaiser
const iterativeFlatten = arr => {
  let result = [];

  // double loop, but no way around it O(n^2)
  arr.forEach(d1 => {
    Array.isArray(d1)                       // if its an array 
      ? d1.forEach(d2 => result.push(d2))   // loop over second dimension and add it to result
      : result.push(d1);                    // else loop over 1st dimension and add it to result
  });
  
  return result;
}


const recursiveFlattenOldHelper = arr => {
  let result = [];

  const helper = d1 => {
    if (d1.length === 0) return;           // base case 
    else if (Array.isArray(d1[0])) {       // check if arr[0] is array
      helper(d1[0]);                       // if so send arr[0] back
    } else {
      result.push(d1[0]);                  // if not array, add to result
    } 
    helper(d1.slice(1)); //  // call again and decrement array by 1, till no more elements left in either outer or inner loop
  }

  helper(arr);

  return result;
}

const recursiveFlattenNewHelper = arr => {
  let result = [];

  const helper = d1 => {
    if (d1.length === 0) return;     // base case 
   
    Array.isArray(d1[0])            // check if arr[0] is array
      ? helper(d1[0])               // if so send arr[0] back
      : result.push(d1[0]);         // if not array, add to result
    
    helper(d1.slice(1)); //  // call again and decrement array by 1, till no more elements left in either outer or inner loop
  }

  helper(arr);

  return result;
}

// better design pattern- pure recursive function
const recursiveFlatten = arr => {
  if (arr.length === 0) return [];           // base case 
  
  let result = [];

  Array.isArray(arr[0])                     // check if element is sub-array  
    ? result = recursiveFlatten(arr[0])     // if so, send back    
    : result.push(arr[0]);                  // if not, add to array

  return result.concat(recursiveFlatten(arr.slice(1)));  // pattern is to reduce array by one wiht slice(1), then concat all values in stack to result and return
}

const iFlattenResult = iterativeFlatten([63, 92, 4, [90, 124]]);
console.log('iFlattenResult: ', iFlattenResult);

const rFlattenResult = recursiveFlatten([[63], [92, 4], [90, 124]]);
console.log('rFlattenResult: ',rFlattenResult);


// capitalizeFirst
/*
Write a recursive function that given an array of strings,
captializes the first letter of every string in the array.
*/

const iterativeCapitalize = arr =>  {
  return arr.map(el => {
    return el.replace(el[0], el[0].toUpperCase());  // better approach
  });
}

const recursiveCapitalize = arr => {             
  let result = [];
  if (arr.length === 0) return arr;   // base case 
  result.push(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()));
  return result.concat(recursiveCapitalize(arr.slice(1))) // not an ideal solution for large data sets because array has to re-index if element removed from front.
}

const iCapitalizeResult = iterativeCapitalize(['hello', 'world','capitalism', 'science']);
console.log('iCapitalizeResult: ',iCapitalizeResult);

const rCapitalizeResult = recursiveCapitalize(['hello', 'world','capitalism', 'science']);
console.log('rCapitalizeResult: ',rCapitalizeResult);

// captializeWords
/*
Write a recursive function that given an array of words
returns a new array containing each word capitalized
*/
const iterativeCapitalizeWord = arr =>  {
  return arr.map(el => {
    return el.replace(el, el.toUpperCase());  // better approach
  });
}

const recursiveCapitalizeWord = arr => {             
  let result = [];
  if (arr.length === 0) return arr;   // base case 
  result.push(arr[0].replace(arr[0], arr[0].toUpperCase()));
  return result.concat(recursiveCapitalizeWord(arr.slice(1))) // not an ideal solution for large data sets because array has to re-index if element removed from front.
}

const iCapitalizeWordResult = iterativeCapitalizeWord(['hello', 'world','capitalism', 'science']);
console.log('iCapitalizeWordResult: ', iCapitalizeWordResult);

const rCapitalizeWordResult = recursiveCapitalizeWord(['hello', 'world','capitalism', 'science']);
console.log('rCapitalizeWordResult: ',rCapitalizeWordResult);


// nestedEvenSum
/*
Write a recursive function that returns 
the sum of all even numbers in an object
which MAY contain nested objects
*/

/* 
Come back to this later on and figure out 
how to do pure and iterative versions of this.
For now, save time and work on other problems
*/

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

const recursiveNestedEvenSum = obj => {
  const isEven = n => n % 2 === 0;
  const isNum = n => typeof n === 'number';
  const isObj = o => typeof o === 'object' && typeof o !== null;
  const objArr = o => Object.values(o);                          // get prop's value from object
  let arr = objArr(obj);
  let sum = 0;

  const helper = arr => {
    arr.forEach(el => {           
      isNum(el) && isEven(el) 
        ? sum += el
        : isObj(el) ? helper(objArr(el)) : undefined;
    });
  }
  helper(arr);
  return sum;
}

const rNestedEvenSum = recursiveNestedEvenSum(obj2);
console.log('rNestedEvenSum: ', rNestedEvenSum); 

// stringifyNumbers
/*
Write a recursive function 
which takes in an object,
finds all the values which are numbers,
and converts them to strings. 
*/

const stringifyNumbersUsingParsing = obj => {
  const newObj = obj => { 
    let regex = /[0-9]+/g;
    let str = JSON.stringify(obj)
      .replace(regex, x => `"${x}"`);
    let fixedObj = JSON.parse(str);
    return fixedObj;
  }
  return newObj(obj);
}

// recursive solution
// mutating the values and only change whats needed
// use recursion to go deep. iteration to go wide.
const mRecursiveStringifyNums = obj => {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {   // check if object
      recursiveStringifyNums(obj[prop]); // recursive part
    } 
    else if (typeof obj[prop] === 'number') obj[prop] = obj[prop].toString();
    // otherwise, don't mutate
  }
  return obj;
}

// non mutating
const recursiveStringifyNums = obj => {
  let o = Object.assign({}, obj);  // declared outside scope of recursion to keep memory of changes and avoid resets

  const helper = o => {  // needs helper() with value declared outside recursion. If not, recursion will reset value, since its when defined at start.
    for (let prop in o) {
      if (typeof o[prop] === 'object' && o[prop] !== null) {   // check if object
        helper(o[prop]); // recursive part
      } 
      else if (typeof o[prop] === 'number') o[prop] = o[prop].toString();
      // otherwise, don't mutate
    }
    return o;
  }
  return helper(o);
}

const pStringifyNumbers = stringifyNumbersUsingParsing(obj2);
console.log('pStringifyNumbers: ', pStringifyNumbers); 

const rStringifyNumbers = recursiveStringifyNums(obj2);
console.log('rStringifyNumbers: ',rStringifyNumbers); 

// collectStrings
/*
Write a recursive function 
called collectStrings an object 
and returns 
which accepts an array of all the values of the object 
with type string
*/
const objCollectString = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

// using recursion
const recursiveCollectStrings = obj => {
  let stringArr = [];

  const helper = o => {
    for (let prop in o) {
      if (typeof o[prop] === 'string') stringArr.push(o[prop]);  // basecase: if string, collect in array 
      else if (typeof o[prop] === 'object' && typeof o[prop]!== null) helper(o[prop]);  // if object, recurse
    }
  }
  helper(obj);
  return stringArr;
}

const rCollectStringsResults = recursiveCollectStrings(objCollectString);
console.log('rCollectStringsResults: ', rCollectStringsResults);




/*
Note:
Although not a data structure, recursion is useful for 
the implmentation of them. 

They are used when a data structure is self similar,
like a binary search tree. 
See the find() implemention of the binary search tree 
in trees.js 

Defintion:
Recursion is a process (usually a function) that calls itself.

Use:
Doing the same process on smaller and smaller peices of problem,
untill you hit an end point. 

Joke:
To understand recursion, you must first understand recursion.

Benefit:
Once you understand recursion, its simpler.
No performance benefit to using. 
Iterative (looping) approach MIGHT be faster in some cases.
Simplicity of recursion is its appeal.

Real world use cases:
1. JSON.parse / JSON.stringify
2. document.getElementById and DOM traversal algorithms
3. Object traversal
4. Seen in tree and graph data structures for traversals

Recursion Needs:
1. base case (terminating case) to avoid infinte loop
2. recursive case, aka case for function to call itself with differnt input

How does it work?
Recursive functions use the "call stack".
A stack is a data structure that resembles a stack of books, 
following LIFO (last in, first out).
See stack.js

When a program is executed, 
its place (pushed) onto the programming language memory's stack.
When a program terminates, its popped off the stack.
The programming language's stack acts as our linear data structure 
to arrange our function executions and thus our variables. 

The same variable will have different contexts 
(due to different function instances) in the stack.

A recursive function pops instances of itself 
on top of stack until the terminating case is reached.
If there is an infinite loop, the stack gets too full, 
the computer runs out of memory which 
results in a stack overflow error.

call function -> pushes function on top of stack
call return -> pops function off stack

We push functions on top of the call stack 
that WAITING for a value 
until we hit the base case that returns a value.
Then we teardown the stack (popping) 
using the values that each function 
provides to the one below it on the stack.

Where things go wrong:
1. No base cased added- infinite loop
2. Not decrementing returning thing- infinite loop
3. Forgetting to return- No loop starts
4. Returning the wrong thing- wrong answer 
5. Console.log instead of return- no return, infinte loop


analogy: convery belt
Think of it as a temporary convayer belt line 
that extends itself across many people. 
When the final guy arrives at the destination 
and gets the goods he passes it to the next, 
who adds something to it
and passes off to the next
then walks off the line. 
This continues to occur until the last guy
gets the final value.

analogy: game of telephone
You can think about it as a game of telephone 
as well. 
The line is formed temporarly.
Each person is waiting for some info from the person 
prior to them. 
The data is recieved and mainpulated by each person.
When this happens their job and thus the order they are in 
are done.

great resources:
1. freeCodeCamp
https://medium.com/free-code-camp/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9
*/