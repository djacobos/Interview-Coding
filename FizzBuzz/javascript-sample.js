// Instructions: Write a program that prints the numbers from 1 to 100.
// a) For multiples of three print "Fizz" instead of the number
// b) For multiples of five print "Buzz"
// c) For numbers which are multiples of both 3 & 5 Print "FizzBuzz"
function fizzbuzzReadable(){
    for(var i=1; i <=100; i++){
        var result = '';
        result += (i % 3) == 0 ? "Fizz": "";
        result += (i % 5) == 0 ? "Buzz": "";
        console.log(result == '' ? i : result);
    }
}

function fizzbuzzComplex(){
    for(var i = 0; i <=100; i++){        
        if ((i % 3 == 0) && (i % 5 != 0)){
            console.log("Fizz");
            continue;
        }
        if ((i % 3 != 0) && (i % 5 == 0)){
            console.log("Buzz");
            continue;
        }
        if ((i % 3 ==0) && (i % 5 == 0)){
            console.log("FizzBuzz");
            continue;
        }

        console.log(i);
    }
}

fizzbuzzReadable();
fizzbuzzComplex();