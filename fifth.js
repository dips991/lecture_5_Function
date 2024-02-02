//function
// function sum(a,b){
//     return a+b;
// }
// multiplication function
// function mul(a,b){
//     return a*b;
// }
//arrow function
//compact way of writing a function
// const functionName =(param1,param2...)=>{
     //do some work
// }
// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }
// const arrowMul =(a,b) =>{
//     return a * b;
// }
// const printHello = () =>{
//     console.log("hello");
// }
//Que..count vowel
// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a" || char ==="e" || char==="i" || char ==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// const countVow = (str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a" || char ==="e" || char==="i" || char ==="o" || char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
//for each loop in Array
//     
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//      console.log(val);
// });

// let arr=["mumbai","delhi","pune"];

// arr.forEach((val) =>{
//      console.log(val.toUpperCase());
// });
// let arr=["mumbai","delhi","pune"];

// arr.forEach((val,idx,arr) =>{
//      console.log(val.toUpperCase(),idx,arr);
// });
/** higher order function / methods take function as parameter
 * return function 
 * for each is higher order function
 */
// let nums=[2,3,4,5,6];
// nums.forEach((num)=>{
//      console.log(num*num);//num**2
// }); 
//callback
// let nums=[67,52,39];

// let calcSquare = (num) =>{
// console.log(num*num);
// };
// nums.forEach(calcSquare);

//some more array method  ...map...
//return new array 
// let nums=[4,5,6];
// let newArr=nums.map((val)=>{
//      return val*val;
// });
// console.log(nums);
// console.log(newArr);

// filter
// let arr= [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val)=>{
//      return val % 2 ===0;
// });
// console.log(evenArr);

//reduce
// let arr=[1,2,3,4];

// const output=arr.reduce((prev,curr)=>{
//      return prev+curr;
// });
// console.log(output);

//to find out largest number
// let arr=[1,2,3,4];

// const output=arr.reduce((prev,curr)=>{
//      return prev>curr ? prev:curr;
// });
// console.log(output);


//filter call back
// let marks=[97,65,32,56,99,96,89];

// let toppers =marks.filter((val)=>{
//      return val>90;
// });
// console.log(toppers);

let n = prompt("enter a number : ");

let arr =[];
for(let i=1;i<=n;i++){
     arr[i-1]=i;
}
console.log(arr);

let sum= arr.reduce((res,curr)=>{
     return res+curr;
});
console.log(sum);


let factorial = arr.reduce((res,curr)=>{
     return res*curr;
});
console.log(factorial);