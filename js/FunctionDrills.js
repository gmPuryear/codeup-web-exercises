/* ***FUNCTION DRILLS from extra exercises functions.md ***
Functions using conditionals but not loops or arrays:



Make a function named isSpace(letter) that returns if a character is a space character
Make a function named isZero(number)
Make a function named notZero(input) that returns true if the input is not zero
Write a function named lowerCase(string)
Write a function named double(n) that returns a number times two
Write a function named triple(n) that returns a number times 3
Write a function named quadruple(n) that returns a number times 4
Write a function named half(n) that returns 1/2 of the provided input
Write a function named subtract(a, b) that returns a minus b
Write a function named multiply(a, b) that returns the product of a times b
Write a function named divide(a, b) that returns a divided by ~b~
    Write a function named remainder(a, b) that returns the remainder after dividing a by b
Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
Write a function named cube(n) that returns n * n * n
Write a function named squareRoot(n) that returns the square root of the input
Write a function named cubeRoot(n) that returns the cube root of the input
Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of
negative, and false for all else.
Write a function named degreesToRadians(number)
Write a function named radiansToDegrees(number)
Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    Make a function named trim(string) that removes empty spaces before and after the input.
    Make a function named areEqual(input1, input2) that returns if both inputs have the same value
Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
    Make a function named not(input) returns the input with a flipped boolean
Make a function named notNot(input) that the negation of the negation of the input.
    Make a function named and(predicate1, predicate2) that returns the logical operation of AND
Make a function named or(predicate1, predicate2) that returns the logical operation of OR
Write a function called reverseString(string) that reverses a string
Make a function named absoluteValue(number) that returns the absolute value of a number.
    Make a function named rollDice(sides) that takes in an argument containing the number of sides the
    die should have. Generate a random number between 1 up to and including the number of sides.
 */
(function () {

// Make a function named isOdd(number)
    function isOdd(number) {
        if (number % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isOdd: ", isOdd(10));
    console.log("isOdd: ",isOdd(5));

// Make a function named isEven(number)
    function isEven(number) {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isEven: ", isEven(4));
    console.log("isEven: ", isEven(5));

// Make a function named identity(input) that returns the input exactly as provided.
    function identity(input) {
        return input;
    }
    console.log("Identity: ", identity("This is the Identity function."));
    console.log("Identity: ", identity(47546373829));

// Make a function named isFive(input)
    function isFive(input) {
        if (input === 5) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isFive: ", isFive(5));
    console.log("isFive: ", isFive(6));

// Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        return input + 5;
    }
    console.log("addFive", addFive(50));
    console.log("addFive", addFive(-5));

// Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input) {
        if (input % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isMultipleOfFive: ", isMultipleOfFive(55));
    console.log("isMultipleOfFive: ", isMultipleOfFive(62));

// Make a function named isThree(input)
    function isThree(input) {
        if (input === 3) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isThree: ", isThree(3));
    console.log("isThree: ", isThree(5));

// Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(input) {
        if (input % 3 === 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isMultipleOfThree: ", isMultipleOfThree(30));
    console.log("isMultipleOfThree: ", isMultipleOfThree(70));

// Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(input) {
        return (input % 3 === 0 && input % 5 === 0) ? 'true' : 'false';
    }
    console.log("isMultipleOfThreeAndFive: ", isMultipleOfThreeAndFive(60));
    console.log("isMultipleOfThreeAndFive ", isMultipleOfThreeAndFive(85));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
    function isMultipleOf(target, n) {
        return (target % n === 0) ? target + ' IS divisible by ' +  n : target + ' is NOT divisible by ' + n;
    }
    console.log("isMultipleOf: ", isMultipleOf(40, 2));
    console.log("isMultipleOf: ", isMultipleOf(45, 2));

// Make a function named isTrue(boolean)
    function isTrue(bool) {
        return (bool === true) ? "It's true!!!" : "It's not true!!!";
    }
    console.log("isTrue: ", isTrue(true), '\n' + "isTrue: ", isTrue(false));

// Make a function named isFalse(boolean)
    function isFalse(bool) {
        return (bool === false) ? 'The isFalse input is FALSE!' : 'The isFalse input is NOT false!';
    }
    console.log('isFalse: ', isFalse(false), '\nisFalse: ', isFalse(true));

// Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(input) {
        return (input) ? "input is truthy" : "input is falsy";
    }
    console.log("isTruthy: ", isTruthy(2), "\nisTruthy: ", isTruthy(!!2));

// Make a function named isFalsy(input), remember that values other than false behave like false
    function isFalsy(input) {
        if (input) {
            return true;
        } else {
            return false;
        }
    }
    console.log("isFalsy: ", isFalsy(""), "\nisFalsy: ", isFalsy(NaN));

// Make a function named isVowel(letter)
    function isVowel(letter) {
        letter = letter.toLowerCase();
        let result = letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
        return result;
    }
    console.log("isVowel: " + isVowel("A") + "\nisVowel: " + isVowel("P"));

// Make a function named isConsonant(letter)
    function isConsonant(letter) {
        letter = letter.toLowerCase();
        let result = letter !== 'a' || letter !== 'e' || letter !== 'i' || letter !== 'o' || letter !== 'u';
        return result;
    }
    console.log("isConsonant: " + isConsonant('p') + "\nisConsonant: " + isConsonant('o'));

// Make a function named isCapital(letter)
    function isCapital(letter){
        let result = letter === letter.toUpperCase();
        return result;
    }
    console.log('isCapital: ' + isCapital('A') + '\nisCapital: ' + isCapital('a'));

// Make a function named isLowerCase(letter)
    function isLowerCase(letter) {
        result = letter.toLowerCase() === letter;
        return result;
    }
    console.log("isLowerCase: " + isLowerCase('a') + "\nisLowerCase: " + isLowerCase("B"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letters
    function hasLowerCase(string) {
        for (var i = 0; i < string.length; i++) {
           if (string[i] === string[i].toLowerCase()) {
               return true
           } else {
               continue;
           }
        }
    }
    console.log("hasLowerCase: " + hasLowerCase('HELLO I'));
})();



