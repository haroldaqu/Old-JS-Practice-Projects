// let userInput = 10;
// const fibArray = [1,1]


// function fibChecker () {
//     for (i = 0; i <= userInput; i++) {
//         const arrayEquation = fibArray[fibArray.length-2] + fibArray[fibArray.length-1]
//         fibArray.push(arrayEquation)
//     }
// }

// fibChecker();
// console.log(fibArray)
// console.log(fibArray[userInput -1])

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

// let bookArray = []
// const filterBooks = books.filter(book => bookArray.push(book.title))

// console.log(bookArray)


const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findOldest = people.sort((a,b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))
console.table(findOldest[0])