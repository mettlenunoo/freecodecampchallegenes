/*
QUESTION:
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half

The string can contain any characters.• The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.

STEPS TO SOLVE:

Define the vowel set: a, e, i, o, u (treat upper/lower the same).

Measure the string length n. Compute mid = floor(n / 2).

If n is even: left half = s[0..mid-1], right half = s[mid..n-1].
If n is odd: ignore the center character — left = s[0..mid-1], right = s[mid+1..n-1].

Count vowels in left and in right (case-insensitive).

Compare counts — equal → halves have same number of vowels.

Tests
isBalanced("racecar") //should return true.

isBalanced("Lorem Ipsum") //should return true.

isBalanced("Kitty Ipsum") //should return false.

isBalanced("string") //should return false.

isBalanced("") //should return true.

isBalanced("abcdefghijklmnopqrstuvwxyz") //should return false.

isBalanced("123A#b!E&*456-o.U") //should return true.

*/

function isBalanced(s){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = s.length;
    const mid = Math.floor(n / 2);
    
    let leftVowelCount = 0;
    let rightVowelCount = 0;

    //check if string length is even or odd
    if (n % 2 === 0) {
        //even length string calculate vowels for left
        for (let i = 0; i < mid; i++) {
            if (vowels.has(s[i].toLowerCase())) {
                leftVowelCount++;
            }

        }
        //calculate vowels for right
        for (let i = mid; i < n; i++) {
            if (vowels.has(s[i].toLowerCase())) {
                rightVowelCount++;
            }
        }

    }else {
        //odd length, ignore the center character
        //calculate vowels for left
        for (let i = 0; i < mid; i++) {
            if (vowels.has(s[i].toLowerCase())) {
                leftVowelCount++;
            }
        }
        //calculate vowels for right
        for (let i = mid + 1; i < n; i++) {
            if (vowels.has(s[i].toLowerCase())) {
                rightVowelCount++;
            }
        }
    }

    return leftVowelCount === rightVowelCount;
}





console.log(isBalanced("racecar")); //should return true.

console.log(isBalanced("Lorem Ipsum")); //should return true.

console.log(isBalanced("Kitty Ipsum")); //should return false.

console.log(isBalanced("string")); //should return false.

console.log(isBalanced("")); //should return true.

console.log(isBalanced("abcdefghijklmnopqrstuvwxyz")); //should return false.

console.log(isBalanced("123A#b!E&*456-o.U")); //should return true.



