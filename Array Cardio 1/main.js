// // racecar

// // 1. turn all strings parts into an array
// // 2. slice it string
//         //  --> first index would be length of string /2
//         // --> second index is total length of string
// // 3. turn sliced array into a string then reverse
// // 4. grab the the first half of the string
// // 5. make a function where it checks if both strings equal each other


// const palindrome = 'racecar'
// const palSplit = palindrome.replaceAll(' ','').split('')
// console.log(palSplit)

// function oddEvenCheck () {
//         const scndHalf =  palSplit.slice(((palSplit.length + 1)/2),(palSplit.length))      
//         const scndHalfReverse = scndHalf.reverse().toString()
//         console.log(scndHalfReverse)
//         const firstHalf = palSplit.slice(0, (palSplit.length/2)).toString()
//         console.log(firstHalf)
//         palChecker(firstHalf, scndHalf)
// } 
// oddEvenCheck()

// function palChecker (first, second) {
//     if (first == second) {
//         console.log('it is a palindrome!')
//     }
//     else {
//         console.log('not a palindrome!')
//     }
// }




