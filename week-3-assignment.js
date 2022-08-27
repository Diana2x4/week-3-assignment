// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log ("#1 ages =" + (ages))


// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log ("#1a The difference between the last number in array and the first number = " + (ages [ages.length - 1] - ages[0]))

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(30)
console.log("#1b The difference between the last number in array and the first number, but with added variable (30)= " + (ages [ages.length - 1] -ages[0]))

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
 let total = 0;
 for (let i = 0; i < ages.length; i++) {
     total = total + ages[i];
 }
 console.log('#1c Average age in ages array =  ' + (total / ages.length));

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log ("#2 Array listOfNames : " + names)

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let x = 0;
for (let i = 0; i < names.length; i++) {  
    x = x + names[i].length
}
console.log('#2a The average # of letters in each name=  ' + (x / names.length)); 

// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
// for (let i = 0; i < names.length; i++) {
    console.log('#2b ' + names.join(' '));

// 3.	How do you access the last element of any array?
let lastElement = names[names.length-1];
console.log('#3 ' + lastElement)

// 4.	How do you access the first element of any array?
let firstElement = names[0];
console.log('#4 ' + firstElement)

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// using maps method to give me each element in names array

let nameLengths = names.map(function(element){
    return element.length;
});
console.log ('#5 nameLenghts array = ' + nameLengths)

// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array


// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

// sum of all values in array using for loop

for (let i = 0; i < nameLengths; i++) {
    
    x = names[i].length
}
console.log(('#6 The sum of all elements in nameLenghts array is: ' + x)); 


// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function seven (word ,n){
      return word.repeat(n);
  }
console.log (seven("hello" , 5))

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function createFullName ( firstName, lastName){
return(firstName + ' ' + lastName);}

console.log ('#8 '+ createFullName('Diana', 'Enriquez'))


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan (numbers){
// return true  if sum is greater than 100 
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers [i]  
} 
    if (sum > 100)
   return  true
   if (sum < 100)
   return false
}
console.log ('#9 ' + greaterThan ([50,60,80,20]))
console.log ('#9 ' + greaterThan ([2,3]))

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function takesArray (num){
let x = 0;
for (let i = 0; i < num.length; i++) {  
    x = (x + num[i])  
}
const averageA = x/num.length
return averageA
}
console.log ('#10 The average =  ' + takesArray([40,50,2,34,6,77,8]))
console.log ('#10 The average =  ' + takesArray([12,13,14,15,15,16]))





// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


function isOneBiggerThanTwo (arr1, arr2) 
{
let total1 = 0
for (let i = 0; i <arr1.length;i++){
total1= (total1 + arr1[i])
}
const average1 =  total1/arr1.length
// console.log(average1) 

let total2 = 0
for (let i = 0; i < arr2.length; i++){
total2 = (total2 + arr2[i])
}
const average2=  total2/arr2.length
// console.log (average2) 

//if (averag1 > average2) return true
return average1 > average2

}
console.log ('#11 ' + isOneBiggerThanTwo ([1,2,3], [4,5,6]))
console.log ('#11 ' + isOneBiggerThanTwo ([4,5,6], [1,2,3]))


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside,moneyInPocket){
if (isHotOutside = true) 
{ while (moneyInPocket > 10.50) 

       return true;
  }
;

}
console.log ('#12 '+ willBuyDrink( true, 11.50))

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function getsBanana(hungry)
{  return hungry * 2
};
console.log ( 'The monkeys get: ' + getsBanana(3) + " banans.")

// if each monkey gets a serving of 2 bananas each
// this function will let the user know how many bananas they need in total  
