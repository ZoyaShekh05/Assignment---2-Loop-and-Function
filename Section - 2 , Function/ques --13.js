//                             <--------------------13. Even or Odd Function ------------------------->

// Create a function that takes a number and checks whether it is even or odd. 


function isEven(num){
    if(num %2 === 0){
        return "Even Number"
    }else{
        return "Odd Number"
    }
}

console.log(isEven(25));