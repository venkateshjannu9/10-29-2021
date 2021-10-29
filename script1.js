'use strict';

const oepningHours={
  thu:{
    open:12,
    close:22,
  },
  fri:{
    open:11,
    close:23,
  },
  sat:{
    open:0,
    close:24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  oepningHours, 
  oepningHours:{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
      open:0,
      close:24,
    },
  },

  order:function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderDelivery :function({starterIndex=1,mainIndex=0,
    time='20:00',address}){
    console.log(`order received !${this,this.starterMenu
      [starterIndex]} and {this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time }`);
  },
};

restaurant.orderDelivery({
  time:'23:30',
  address:'via del sole,21',
  mainIndex:2,
  starterIndex:2,
});

restaurant:orderDelivery({
  address:'via del sole,21',
  time:'22:30',
  mainIndex=2,
  starterIndex=2
})

const {name,oepningHours,categories}= restaurant;
console.log(name,oepningHours,categories);

const { name:restaurantName,oepningHours:hours,categories:tags}= restaurant;
console.log(restaurant,hours,tags);

const{menu= [],starterMenu:starter=[]}= 
restaurant;
console.log(menu,starter);

// mutatating variables
let a= 111;
let b = 999;
const obj={a:23 , b:7, c:14};
( {a,b}= obj);
console.log(a,b);

// nested objects
const {fri:{open,close} } = oepningHours;
console.log(open,close);


// destructuring arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z]= arr;
console.log(x,y,z);
console.log(arr);


let [first, second] = restaurant.categories;
console.log(main, secondaray);

// const temp = main;
// main = secondaray;
// secondaray= temp;
// console.llog(main,secondaray);
 [main,secondaray] = [secondaray,main];
 console.log(main,secondaray);

 const[starter,main]= restaurant.order(2,0);
 console.log(starter,mainCourse);

//  nested destructuring

const nested  = [2,4,[5,6]];
const[i, ,[j,k]]= nested;
console.log(i,j,k);

//  default values 

const[p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
// spread operator ...
const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr= [1,2,...arr];
console.log(1,2,7,8,9);
 const newMenu = [...restaurant.mainMenu,'Gnocci'];
 console.log(newMenu);

//  copy array 
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//  iterable: arrays,string,maps ,sets, not objects
const str = 'venkatesh';
const letters = [...str,'','s.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} jannu`;)

//  spread , because on right side of =  

const arr= [1,2,...[3,4]];

// rest, because o left side of =
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

 const [Pizza, , Risotto,...otherFood]=
 [...restaurant.mainMenu,...restaurant.starterMenu];
 console.log(Pizza,Risotto,otherFood);
//  rest parameters
 function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));


//   objects

const{sat,...weekdays}= restaurant.oepningHours;
console.log(weekdays);

// finctions

const add = function(...numbers){
  let sum = 0;
  for(let i=0;i<numbers.length;i++) sum +=
  numbers[i];
  console.log(sum);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,6,9,1,4);
const x = [23,5,7];
add(...x);
// short circuting

console.log(5 || 'venkatesh');
console.log(''||'venkatesh');

console.log(undefined || 0||''||'hello'||23||null);
// and operator

console.log(0 && 'venkatesh');
console.log(7 && 'venkatesh');

// set 
const staff = ['waiter', 'cheif', 'waiter','manager','cheif','waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set (['waiter', 'cheif', 'waiter','manager','cheif','waiter']).size);
// map
const rest = new Map();
rest.set('name','calssico Italiano');
rest.set(1,'Firenze,Italy');
console.log(rest.set(2,'Lisbon,portugal'));

rest.set('categories',['Italian','Pizzaerian','vegetarian','organic'])
.set('open',11)
.set('close',23)
.set(true,'we are open :D')
.set(false,'we are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

rest.get(time)>rest.get('open')&&time <rest.get('close');

// challenge 1

const gameEvents = new Map([
  [17,'🎲 Goal'],
  [36,'Substitution'],
  [47,'Goal'],
  [61,'Substitution'],
  [64,'yellow card'],
  [69,'red card'],
  [70,'Substitution'],
  [72,'Substitution'],
  [76,'Goal'],
  [80,'Goal'],
  [92,'yellow card'],
]);
const events = [... new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(`An event happend , on average, every 
${90/gameEvents.size}9 minitus`);
const time = [...gameEvents.keys()];
console.log(time);

console.log(`An event happend , on average, every 
${time/gameEvents.size}9 minitus`);

for (const [min,event]of gameEvents){
  const half = min <= 45? 'FIRST' : 'SECOND' ;
  console.log (`[${half} HALF] ${min}:${event}`);
}
//  working with strings
 

 const airline = 'TAP Air Portugal';
 const plane = 'A320';

 console.log(plane [0]);
 console.log(plane[1]);
 console.log(plane[2]);
 console.log('B737'[0]);

console.log(airline.length);
console.log(B737.length);

console.log (airline.indexOf('r'));
console.log (airline.lastIndexOf('r'));
console.log (airline.indexOf('portugal'));

console.log(airline.slice[4]);
console.log(airline.slice[4,7]);

console.log(airline.slice(0,airline.indexOf('')));
console.log(airline.slice(0,airline.lastIndexOf('')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E')
    console.log('You got the middle seat😊');
    else console.log('ypu got lucky😎');
    console.log(new String('venkatesh'));
    console.log(typeof new String ('vekaresh'));

    console.log(typeof new String('venkatesh').slice(1));

}
checkMiddleSeat ('11B');
checkMiddleSeat ('23C');
checkMiddleSeat ('3E');
