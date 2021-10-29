// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	
     let firstElement = arr[0];
       return firstElement;
   }
   console.log (getFirstValue([1, 2, 3]));
   console.log(getFirstValue([80, 5, 100]));
   console.log(getFirstValue([-500, 0, 50]));

//    Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) 
{
 let array= [num1,num2];
 return array;
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

// upvotes vs down votes 
function getVoteCount(upVotes,downVotes) 
{
	let VoteCounts = (upVotes+(-downVotes));
    return VoteCounts;
}
console.log(getVoteCount(13,0));
console.log(getVoteCount(2,33));
console.log(getVoteCount(132,132));

// Reverse an Array

function reverse (arr)
{
    return arr.reverse();
}
console.log(reverse([1,2,3,4]));

// Simple array manipulation

function incrementItems(arr) 
{
    let array1=[];
	for (let i = 0; i < arr.length; i++)
    {
     array1[i] = arr[i] + 1
    
    }
    return array1;
    
}
console.log(incrementItems([0,1,2,3]));

// can assign variables from arrays.
const arr = [1, 2, 3, 4, 5, 6];
let a= arr[0];
let b = arr[1];
console.log(a);
console.log(b);

// return last element
function getLastItem(arr) 
{
    let lastEl = arr[arr.length-1];
    return lastEl;
}
console.log(getLastItem([1,2,3]));
console.log(getLastItem(["cat","dog","duck"]));
console.log(getLastItem([true,false,true]));

// array indexing 
function valueAt(arr, i) 
{
    if (i >= arr.length)
    {
    return "Index >= Array length, therefore arr[i] is undefined.";
    } 
    else
    {
      return arr[Math.floor(i)];
    }
      
  };
  console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
  console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
  console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
//   convert an array to string 

function arrayToString(arr) 
{
	const Array2 = [arr.toString()];
    return Array2;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// concating two integer arrays
function concat(arr1, arr2) 
{
    let array3 = arr1.concat(arr2);
    return array3;
}
console.log (concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// _.drop, Drop the First Elements of an Array
function drop(arr, val) 
{
	let Elements1 = (arr.slice(val));
    return Elements1;
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
// //  find the index
function findIndex(arr, str) 
{
    let position =arr.indexOf(str);
    return position;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// index part 1
function search(arr1, item) 
{
	if(arr1.indexOf(item))
    {
        let position1 = arr1.indexOf(item);
        return position1;
    }
    else {
        return -1
    }
}
console.log(search([1,5,3],5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

// Index Part2 
function search(arr2, item)
{
    if(arr2.indexOf(item))
    {
      let position2 = arr2.indexOf(item);
      return position2;
    }
    else {
        return -1;
    }
}
console.log(search([1,2,3,4],3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));

//  check if an array contains a given number
function check(arr, el) 
{
	let contains =arr.includes(el);
    return contains;
}
console.log(check([1,2,3,4,5], 3));

//  less than , greater than
function arrBetween(num1, num2, arr) 
{
    if(num1<arr.arrBetween && num2>arr.arrBetween)
    {
     let Array1=arr(num1,num2);
     return Array1;
    }
    else{
        return -1;
    }
}
console.log(arrBetween(3,8,[1,5,95,0,4,7]));
console.log(arrBetween(1,10,[1,10,25,8,11,6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// Bug fixes


function nameString(name)
{
	var b = "Edabit";
	var result = name + b;
  	return result
}
console.log(nameString("Mubashir"));
console.log(nameString("Matt") );
console.log(nameString("javaScript"));

// swap 
function swap(a, b) {
	let temp = a;
    a = b;
    b = temp;
	return [a, b];
}
console.log(swap(100, 200));
console.log(swap(33,44));
console.log(swap(21, 12));

// fix the expression

function isSeven(x) 
{
    return x==7?true:false;
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

// buggy code (part 4)

function greeting(name) 
{
    
    if(name =="Mubashir")
     {
        return "Hello, my Love!";
       
    }
    return "Hello, " + name + "!";
}
console.log(greeting("matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));
//  maximum number
function maxNum(n1,n2) 
{
	if (n1<n2) 
    {
	  return n2;
	}
  else 
  {
	return n1;
  }
}
console.log(maxNum(3, 7));
console.log(maxNum(-1, 0));
console.log(maxNum(1000, 400));
// buggy code
function has_bugs(buggy_code) 
{
	if (buggy_code) 
    {
		return 'sad days';
	} else {
		return 'its a good day';
	}
}
console.log(has_bugs(true));
console.log(has_bugs(false));

// increment array
function incrementItems(arr)
 {
	for (let i = 0; i < arr.length; i++)
    {
	    arr[i] = arr[i]+1;
        
	}
    return arr;
}
console.log( incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// check odd number or not
function isOdd(num) 
{
	let remainder = num%2;
    if(remainder!=0)
    {
        console.log(true);
    }
   else {
       console.log(false);
   }
}
isOdd(-5);
isOdd(25);
isOdd(0);
// Sum of array
function sumArray(arr) 
{
	let sum=0;	
    for (i=0; i<arr.length; i++) 
    {
	  sum+=arr[i];
	}
   return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

// finding the bug
function getContainer(product) 
{
	let container;
    switch (product) 
    {
		case "Bread":
			container = "bag";
            break;
		case "Beer":
			container = "bottle";
			break;
		case "Cerials":
			container = "box";
			break;
		case "Eggs":
			container = "carton";
			break;
		case "Candy":
			container = "plastic";
            break;
		default:
			container = null;
	}

	return container;
}
console.log(getContainer("Bread"));
console.log(getContainer("Beer"));
console.log(getContainer("Candy"));
console.log(getContainer("Cheese"));

// fix the broken code

function sortWord(word) 
{
	return word.split("").sort().join("");
}
console.log(sortWord("dcba"));
console.log(sortWord("Unpredictable"));

//  remove numbers from a given string

function removeNumbers(str) {
	return str.split('').filter(c => !parseInt(c)).join('');
}
console.log(removeNumbers("mubashir1"));
console.log(removeNumbers("12ma23tt"));
console.log(removeNumbers("e1d2a3b4i5t6"));

// NUmbers 
// Is the Number Less than or Equal to Zero? 
function lessThanOrEqualToZero(num) 
{
    if(num==0)
    {
        let Number1 = true;
        return Number1;
    }
    else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(2));

//  Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) 
{
    if(num1 == num2)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(isSameNum(4,8));
console.log(isSameNum(2,2));
//  Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) 
{
    if((prob*prize) > pay)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
// Create a function that takes a boolean variable flag and returns it as a string.
function boolToString(flag) 
{
    
    return flag.toString();
}
console.log(boolToString(true));
// buggy code (part 4)
function greeting(name) 
{
    
    if(name =="Mubashir")
     {
        return "Hello, my Love!";
       
    }
    return "Hello, " + name + "!";
}
console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));

        //    sorting
// Create a function that takes an array and returns the types of values (data types) in a new array.
function arrayValuesTypes(arr) 
{
	let newArray = [];
	for(let i=0; i<arr.length; i++) 
    {
	newArray.push(typeof arr[i]);
	}
	return newArray;
}

console.log(arrayValuesTypes([1, 2, "null", []]));
//A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.

// Spot and fix the error(s) in the code to make the function work.

function sortWord(word) 
{
	return word.split("").sort().join("");
}
console.log(sortWord("dcba"));
console.log(sortWord("Unpredictable"));

// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.
function moveZeros(arr){
  let arr1 = [];
	let arr2 = [];
	for(let i=0; i<arr.length; i++) 
    {
		arr[i] === 0 ? arr2.push(arr[i]) : arr1.push(arr[i]);
	}	
	return arr1.concat(arr2)
}
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
//  Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.
function evenOddString(txt) {
  let evens = "";
  let odds = "";
  for (let i = 0; i < txt.length; i++) {
    if (i % 2 === 0) {
      evens += txt[i];
    } else {
      odds += txt[i];
    }
  }
  return `${evens} ${odds}`;
}
console.log(evenOddString("mmubashir"));
console.log(evenOddString("edabit"));
// find the largest number in an array
function findLargestNum(arr) 
{
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) 
    {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
console.log(findLargestNum([4,5,1,3]));

    //  objects
// Upvotes vs Downvotes
    function getVoteCount(upVotes,downVotes) 
    {
        let Count = (upVotes+(-downVotes));
        return Count;
    }
    console.log(getVoteCount( 13, 0));
    console.log(getVoteCount( 2, 33));
    console.log(getVoteCount( 132, 132));

// volume of box 

function volumeOfBox(width,length,height)
{
	let Volume = (length*width*height);
    return Volume;
}
console.log(volumeOfBox(2,5,1));
console.log(volumeOfBox(4,2,2));
console.log(volumeOfBox(2,3,5));

// Destructuring arrays

writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8];
let other = writeyourcodehere.slice(3);
console.log(writeyourcodehere[0]);
console.log(writeyourcodehere[1]);
console.log(writeyourcodehere[2]);
console.log(other);