/*1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence*/

const countSheep = function(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence')
  }
  console.log(`${num}: Another sheep jumps over the fence`)
  countSheep((num -1))
}

countSheep(5);

/*2. Power Calculator
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0*/

const powerCalculator = function(base, ex) {
  if (ex <= 0) {
    return console.log('exponent should be >=0')
  }
  else if (ex === 1) {
    console.log(base)
    return base
  }
  else {
    return base * powerCalculator(base, (ex -1))
  }
}

console.log(powerCalculator(5, 2));

/*3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.*/

const reverseString = function(string) {
  const arr = string.split('')

  if (arr.length === 1) {
    return arr[0]
  }
  else {
    return reverseString(arr.slice(1).join('')) + arr[0]
  }
}
console.log(reverseString('abc'));

/*4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.*/

function triangularNumber(n) {
  if (n === 1){
    return 1
  }
  else return triangularNumber(n-1) + n
}
console.log(`triangular number :` + triangularNumber(4));

/*5. String Splitter
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
Input: 02/20/2020
Output: ["02", "20", "2020"] */

function strSplit(str, char) {
    if (str.length === 0 ) 
      return '';
    else {
    return ((str[0] !== char) 
      ? (str[0] + strSplit(str.substr(1), char)) 
      : strSplit(str.substr(1), char));
}
}

console.log(strSplit('3/15/83', '/'));

/*6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

function fibonacci(n) {  
  if(n === 0) {    
    return 0;
 }  if(n === 1) {    
   return 1;
 }  else {    
   return fibonacci(n-1) + fibonacci(n-2);
 }}
console.log('fibonacci(7) must be 13 :' + fibonacci(7))

/* 7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

function factorial(num) {
  if (num === 1) {
    return 1
  }
  else {
    return num * factorial(num - 1)
  }
}
console.log('factorial number 5 equals to: '+ factorial(5))

/*8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR
*/
function findPath(row, column, solution) {
    let maze = [
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', 'e']
        ];
    
    solution = solution.slice(0)

    if (column < 0 || column > (maze[0].length -1) || row < 0 || row > (maze.length - 1)) return false; //if it is outside of map
    if (maze[row][column]=== '*') return false; 

    if (maze[row][column] === 'e'){
        console.log(solution.join(''))
        return true
    }

    if(maze[row][column] === '!')
        return false;

    maze[row][column]='!'
    
    if(findpath(row+1, column, [...solution, 'D'])) 
        return true   
    if(findpath(row, column+1, [...solution, 'R'])) 
        return true    
    if(findpath(row, column-1, [...solution, 'L']))
        return true
    if(findpath(row-1, column, [...solution, 'U'])) 
        return true                    

    return false;
};

console.log('maze solution is: ' +findPath(3, 3, []));

/* 2nd solution */
function makeNewMaze(maze, x, y) {
  const newMaze = maze.map(ele => [...ele]);
  newMaze[y][x] = '*';
  return newMaze;
}


function getOut(maze, x = 0, y = 0) {
  const maxY = maze.length - 1;
  const maxX = maze[0].length - 1;

  if (x < maxX && maze[y][x + 1] === 'e') {
    return 'R';
  }

  if (y < maxY && maze[y + 1][x] === 'e') {
    return 'D';
  }

  const newMaze = makeNewMaze(maze, x, y);

  if (y > 0 && maze[y - 1][x] === ' ') {
    if (getOut(newMaze, x, y - 1)) {
      return 'U' + getOut(newMaze, x, y - 1);
    }
  }

  if (y < maxY && maze[y + 1][x] === ' ') {
    if (getOut(newMaze, x, y + 1)) {
      return 'D' + getOut(newMaze, x, y + 1);
    }
  }

  if (x > 0 && maze[y][x - 1] === ' ') {
    if (getOut(newMaze, x - 1, y)) {
      return 'L' + getOut(newMaze, x - 1, y);
    }
  }

  if (x < maxX && maze[y][x + 1] === ' ') {
    if (getOut(newMaze, x + 1, y)) {
      return 'R' + getOut(newMaze, x + 1, y);
    }
  }
}

const testMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(getOut(testMaze));

/*10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words. */

function anagram(str){
  if(str.length===1){
    return [str]
  }
  const chars = str.split('')
  const arr = []
  chars.forEach((char,index)=>{
    const lessChars = chars.filter((ele,i)=> i!==index).join('');
    anagram(lessChars).forEach(ana=>{
      arr.push(char+ana)
    });
  });
  return arr;
}

console.log(anagram('ask'),anagram('ask').length)

/*12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

*/

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num % 2); 
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; 
    }
}

console.log(convertToBinary(25))