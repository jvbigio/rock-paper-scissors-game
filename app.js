/*
GAME RULES:

rock crushes scissors
scissors cuts paper
paper covers rock

Include tie events
*/
// const name = window.prompt('Enter your name: ')
// alert('Your name is ' + name)
const rock = document.querySelector('.rock').addEventListener('click', rockPaperScissors)
const paper = document.querySelector('.paper').addEventListener('click', rockPaperScissors)
const scissors = document.querySelector('.scissors').addEventListener('click', rockPaperScissors)
// output result
const output = document.querySelector('.output')

// computer randomly picks rock, paper, or scissors
function rockPaperScissors (e) {
  if (e.target.classList.contains('rock')) {
    console.log('Rock')
  } else if (e.target.classList.contains('paper')) {
    console.log('Paper')
  } else if (e.target.classList.contains('scissors')) {
    console.log('Scissors')
  }
}
