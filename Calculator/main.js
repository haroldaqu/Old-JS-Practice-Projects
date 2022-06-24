const calculatingScreen = document.querySelector('.calculatingScreen');
const button = document.querySelectorAll('.button')
let btnArray = []


button.forEach(btn => { 
    btn.addEventListener('click', () => {
        let userInput = btn.innerText
        calculatingScreen.append(userInput)
        
        if (Number(userInput)) {
            btnArray.push(userInput)
            console.log(btnArray)
        }
        else if(userInput === 'C') {
            calculatingScreen.innerText = ''
            btnArray = []
        }
        else if(userInput === '=') {
            calculation = eval(btnArray.join(''))
            calculatingScreen.innerText = ''
            calculatingScreen.append(calculation)
            
        }
        else if (userInput === 'D') {
            userInput = userInput.toString().slice(0,-1)
            btnArray.pop()
        }
        else {
            btnArray.push(userInput)
            console.log(userInput)
        }
        
    })
})



