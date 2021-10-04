/*jslint browser:true*/
/*global console*/
/*global window*/

// GLOBAL VARIABLES FOR KEEPING INFORMATION BETWEEN ANALYZED NUMBERS
// = between button presses = also when doTheAnalysis is not running
var sum = 0;
var count = 0;
var min = 0;
var max = 0;
var divisibleByThree = "";
var evenNumbers = "";
var enteredNumber = "";

function doTheAnalysis() {
    // INPUT READING AND CHECKING 
    var inputNumberText = document.getElementById("inputNumber").value;
    isInputValid = true;
    if(isNaN(inputNumberText)) {
        isInputValid = false;
    } else if(inputNumberText.trim() == "") {
        isInputValid = false;
    }
    
    // OUTPUT an ERROR notice otherwise analyze number
    if(!isInputValid) {
        alert("Please give me a number!");
    } else {
        inputNumber = Number(inputNumberText);
        document.getElementById("inputNumber").focus();
        
        // ----------------------------------------------------
        // PROCESSING of Average
        sum += inputNumber;
        count++;
        var average = sum/count;
        // OUTPUT of Average
        document.getElementById("avgOutput").innerHTML = average.toFixed(4); 

        // ----------------------------------------------------
        // PROCESSING and OUTPUT of Min Max
        if(count === 1) {
            min = inputNumber;
            max = inputNumber;
            document.getElementById("minOutput").innerHTML = min;
            document.getElementById("maxOutput").innerHTML = max;
        } else{
            if(inputNumber < min) {
                min = inputNumber;
                document.getElementById("minOutput").innerHTML = min;
            }
            if(inputNumber > max) {
                max = inputNumber;
                document.getElementById("maxOutput").innerHTML = max;
            }
        }
        
        // ----------------------------------------------------
        // PROCESSING Numbers divisible by three
        if(inputNumber > 0 && inputNumber%3 == 0) {
            divisibleByThree = divisibleByThree + inputNumber + ", ";
        }

        // OUTPUT Numbers divisible by three
        document.getElementById("divisibleByThree").innerHTML = divisibleByThree;

        // ----------------------------------------------------
        // PROCESSING Even numbers down to next full ten
        var evenNumbers = "";
        if(inputNumber > 0 && inputNumber%2 == 0) {
            var evenNumbersBeforeFullTen = inputNumber; 
            while(evenNumbersBeforeFullTen%10 != 0) {
                evenNumbers = evenNumbers + evenNumbersBeforeFullTen + ", ";
                evenNumbersBeforeFullTen+=2;
            }
        } else if(inputNumber < 0 && inputNumber%2 == 0) {
            var evenNumbersBeforeFullTen = inputNumber; 
            while(evenNumbersBeforeFullTen%10 != 0) {
                evenNumbers = evenNumbers + evenNumbersBeforeFullTen + ", ";
                evenNumbersBeforeFullTen-=2;
            }
        }

        // OUTPUT Even numbers down to next full ten
        document.getElementById("evenNumbers").innerHTML = evenNumbers;

        // ----------------------------------------------------
        // PROCESSING Prime number test
        var isPrimeNumber = true;
        
        if(inputNumber >= 2) {
            for(var divider = 2; divider <= Math.sqrt(inputNumber); divider++) {
                if(inputNumber%divider == 0) {
                    isPrimeNumber = false;
                }
            }
        } else {
            isPrimeNumber = false;
        }

        // OUTPUT Prime number test
        if(isPrimeNumber) {
            document.getElementById("primeNumber").innerHTML = "This number is a prime number.";
        } else {
            document.getElementById("primeNumber").innerHTML = "This number is NOT a prime number.";
        }

        enteredNumber = enteredNumber + inputNumberText + ", ";
        document.getElementById("countNumber").innerHTML = count;
        document.getElementById("enteredNumber").innerHTML = enteredNumber;
    }
}
