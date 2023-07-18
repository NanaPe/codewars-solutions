// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    //Write your own Code!
       const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        return (number >= 0 && number <= 9) ? words[number] : "Number is not between 0 and 9";
    
    }