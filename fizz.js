let answer = parseInt(prompt("Please enter the number you will like to FIZZBUZZ up to:"))

for (i = 1; i <= answer; i++){
if (i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz")
}else if (i%5 === 0){
    console.log( "Buzz");
}else if (i%3 === 0 && i){
    console.log("Fizz");
}else{
    console.log(i);
}
}

