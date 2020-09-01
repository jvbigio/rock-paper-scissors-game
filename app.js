/*
GAME RULES:

rock crushes scissors
scissors cuts paper
paper covers rock

Include tie events
*/
// const name = window.prompt('Enter your name: ')
// alert('Your name is ' + name)
const rock = document.querySelector('.rock')
rock.addEventListener('click', rockPaperScissors)
const paper = document.querySelector('.paper').addEventListener('click', rockPaperScissors)
const scissors = document.querySelector('.scissors').addEventListener('click', rockPaperScissors)
// output result
// const output = document.querySelector('.output')
const buttons = document.getElementsByTagName('button')

// computer randomly picks rock, paper, or scissors
// function computerPick () {
//   const choices = ['rock', 'paper', 'scissors']
//   const choice = choices[Math.floor(Math.random() * choices.length)]
// }

function rockPaperScissors (e) {
  const output = document.querySelector('.output')
  const computerChoices = ['rock', 'paper', 'scissors']
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  // const playerChoice = e.target.closest('button').classList.contains('rock') // returns boolean
  // const playerChoice = e.target.closest('button').value
  const playerChoice = e.target.closest('button').classList.value
  // console.log(choice) // works
  // if (e.target.classList.contains('rock')) {
  //   console.log('Rock')
  //   // if ()
  // } else if (e.target.classList.contains('paper')) {
  //   console.log('Paper')
  // } else if (e.target.classList.contains('scissors')) {
  //   console.log('Scissors')
  // }
  // WORKS BELOW, DON'T DELETE:
  // console.log(e.target.closest('button').matches('.rock'))
  if (playerChoice === computerChoice) {
    // console.log('Tie! Try again...')
    // output.innerHTML = 'Tie! Try again...'
    // output.textContent = 'Tie! Try again...'
    // output.innerHTML = '<h3><mark>Tie! Try again...</mark></h3>'
    output.innerHTML = '<h3>Tie! Try again...</h3>'
    // output.innerHTML = ''
  }
  // console.log(buttons)
  // for (let i = 0; i < buttons.length; i++) {
  //   if (buttons[i].matches('.rock')) {
  //     if (e.target.closest('button')) {

  //     }
  //     console.log('Match')
  //   }
  // }
  // if (choice.matches('.rock')) {
  //   console.log(123)
  // }
  // console.log(rock.value)
  // const rock = e.target.classList.contains('rock')
  // if (rock) {
  //   console.log('MATCH')
  // }
  // console.log(rock)
  // console.log(e.target)
}
