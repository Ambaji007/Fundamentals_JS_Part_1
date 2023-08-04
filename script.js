console.log("Hello... Here we are learnig JS Fundamental part 1");

        console.log('Hello00');   
        let students; //this is undefinds funtion means variable declare and but not assign value for it..
        console.log(students) ; 
        true 
        // this is example of dynamic typing....
let first = "check";
console.log( typeof first);

first = true;
console.log(typeof first);

//this for undefined variable ...
//let year ;
//console.log(year);
//console.log(typeof year);

// bug in javascript 
//console.log(typeof null );

//how to declare a varible 

//by using let, var, const 
//const num =555
//console.log(num);
//num = "444";
//console.log(num) 
//const int ;
//console.log(int)

//mathamatical opraters 
const agrJone= 1998 -2023 ;
const agessia = 1999 -2023;
console.log(agrJone -agessia);
console.log  (agessia , agrJone);

//2 ** 3 means 2 to the power of 3 means 2 * 2 * 2 = 8;

// to strings concatinate by using + oparater 
// these are assigment operaters
let num = 2+9; //11
num +=25 //num = num + 25 ==36
num *= 2  // num = num * 2 == 72
num++; // num = num +1  == 73
num-- ; //num = num -1 == 72
num--; //num = num - 1 == 71
console.log(num)

// comparision operaters [<, <=, >=,  >]  
let age = 11 ;
console.log(age >= 18) ; // age is greater than and equal to 18 

//procedence of differnt operater 

let x , y ;
x = y = 25- 10 -5 ; // x=y=10 x = 10 y =10;
console.log(x , y);

const personAge_1 =  22;
const personAge_2 =  30;
const avgAge = (personAge_1 + personAge_2) /2;
console.log(personAge_1 , personAge_2, avgAge);

//strings an d template literals this mostly used for creating multi line strings  ;
//this ES6 features


const name = "Ambaji";
const result = `I'm ${name}`
console.log(result);

// creating multi line strings ;
console.log(`string with \n
multiple \n
lines

`)
console.log( `string 
with 
multi 
lines
`)



//deision making by if and else conditions 
const age_1 = 14;

const isageEnough = age_1 >= 18;
if(isageEnough == true){
    console.log("You are eligible.....🤷‍♂️🤷‍♀️🤷‍♀️")

}else {
   const yearsLeft= 18 - age_1;
   console.log(`You have wait for ${yearsLeft} years;>>>`)
}


const barthAge = 2021 ;
let  centery;
if(barthAge >= 2000){
    centery = 21;

}else {
    centery = 19;
}
console.log(centery)


//type converssion  
let num_2 = "1998" ;
console.log(Number(num_2) , num_2);
console.log(Number( num_2) + 15);

console.log(String(25), 25);

 // type  coercion
 console.log('am '+ 25 + " years old");
 console.log('am '- 25 - " years old");
 console.log('am '* 25 * " years old");
 console.log('25' -'10' -5);
 console.log('25' + '10' + 5);
 console.log('25' * '10');
 console.log('25' / '10');

 // Guess 
 let n = "1" +1 // str 11
 n = n-1 // n = 11 thats an number
 console.log(n)
 // truesy and falsy ;
 //5 falsy values : 0 , "",undefined, null, NaN
 console.log(Boolean(0))
 console.log(Boolean(""))
 console.log(Boolean("aMBAJI"))
 console.log(Boolean(undefined))
 console.log(Boolean(null))
 console.log(Boolean(NaN))
 console.log(Boolean({})) //Empty Object;


 //example 
 const money = 0;
 if(money){
    console.log("Don't Spend more money");
 }else{
    console.log('you have to earn money..')
 }


 let height;
 if(height){
    console.log("Hay height is defined")
 }
 else{
    console.log("Height is undefined")
 }



// equality operater  == ===;
let mon = 18 
if(mon == "18")console.log("yes");//loose
if(mon === "18")//strict 
{
    console.log("yes");
}else{
    console.log("No")
}

//lets take input from user 
//let pro =  prompt("What is your name??")
//console.log(pro);
//console.log(typeof  pro);

//let pro_1 = Number(prompt("What is your name??"))
//console.log(pro_1);
//console.log(typeof  pro_1);


// Boolean Logic;
//AND {&&} , OR {||} ,NOT Operater 
//true AND true == true;

//Logical Operaters;
//const hasDrivingLicence = true; // Assume As A

//const hasGoodVission = false // Assume As B
//console.log(hasDrivingLicence && hasGoodVission)
//console.log(hasDrivingLicence || hasGoodVission)
//console.log(!hasGoodVission)

//switch statement 

const day = "monday";
switch (day){
    case "monday": //day === monday;
        console.log("Monday is boaring😒😒😒");
        console.log("Meet to frnds...!!!❤❤❤");
        break;
    case "tuesday"://day ===tuesday
        console.log("Working a lot...");
        break ;
    case "wednesday"://day ===wednesday
        console.log("Waiting  for chicken...");
        break;
    case "thursday": //day ===thursday
    case "sat": //day === sat
        console.log("Go to temple...");
        break; //get out from loop
    case "friday"://day === friday
        console.log("Fun Day 😍😍😍😍");
        break;
    
        
    case "sunday": //day === sunday; 
        console.log("Holyday🎉🌹🌹🎉🌹");
        break;
    
    default : //this like else statement

        console.log("Have a nice day...")


}
//console.log("Have a nice day...")


//or in if statement
let day_3 = "thursday";
if(day_3 === "thursday"){
    console.log("Monday is boaring😒😒😒");

}else if(day_3 ==="tuesday"){
    console.log("Working a lot...");
}
else if(day_3 ==="wednesday"){
    console.log("Waiting  for chicken...");

}else if(day_3 ==="thursday" || day === "sat"){
    console.log("Go to temple...");

}else if(day_3 === "friday"){
    console.log("Fun Day 😍😍😍😍");
}else if(day_3 === "sunday"){
    console.log("Holyday🎉🌹🌹🎉🌹");

}
else{
console.log("Have a nice day...")

}


// statements and expression : 
//3+5 is an expression ;
//1199 is an exprission;
//true && false !false is an expression...
// these are produce values



// statements like if, switch  these are procedce actions 

// conditional (Ternery ) operater;
// condition ? true : false 
//it has three parts they are condition and true and false


// Ternery oparaters will use in template letrals ${here}
const me = 20 ;
me >= 18 ? console.log("You are adult") : console.log("Your are a child") 
//or 
const drink = me >= 18 ? "Wine" : "Water";
console.log(drink) 
//or 

let drink_2 ;
if(me >= 18){
    drink_2= "Bear";

}else{
    drink_2 = "Milk";
}
console.log(drink_2)


// Ternery oparaters will use in template letrals ${here}
//Here the example 
console.log(`I like to drink ${me >= 18 ? " Wine" : " Water"}`)


// ES5,  ES6+ ESNEXT;
//History es1 in 1997 es5 2009 es6 2015 

// bable 

//ES5 Fully supported in all browsers (dow Ie 9 from 2011);
//Ready to use today ;

//ES6 TO SO ON well suppourted in all brosers 
// features is used production and transpiling(beble) and polyfilling;

