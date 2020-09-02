// const name = window.prompt('Enter your name: ')
// alert('Your name is ' + name)
const rock = document.querySelector('.rock')
rock.addEventListener('click', rockPaperScissors)
const paper = document.querySelector('.paper').addEventListener('click', rockPaperScissors)
const scissors = document.querySelector('.scissors').addEventListener('click', rockPaperScissors)
const buttons = document.getElementsByTagName('button')

function rockPaperScissors (e) {
  const output = document.querySelector('.output')
  const computerChoices = ['rock', 'paper', 'scissors']
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  const playerOneIcon = document.querySelector('.player-choice-0')
  const computerChoiceIcon = document.querySelector('.player-choice-1')
  // const playerChoice = e.target.closest('button').classList.contains('rock') // returns boolean
  // const playerChoice = e.target.closest('button').value
  const playerChoice = e.target.closest('button').classList.value
  // WORKS BELOW, DON'T DELETE:
  // console.log(e.target.closest('button').matches('.rock'))
  /*
GAME RULES:
rock crushes scissors
paper covers rock
scissors cuts paper
Include tie events

icons:

font awesome scissors
<i class="fas fa-cut"></i>
paper:
<ion-icon name="receipt-outline"></ion-icon>
<i class="far fa-hand-scissors"></i>
paper airplane
<i class="far fa-paper-plane"></i>

<i class="fas fa-toilet-paper"></i>
*/
  if (playerChoice === computerChoice) {
    output.innerHTML = '<h3>Tie! Try again...</h3>'
    playerOneIcon.innerHTML = ''
    computerChoiceIcon.innerHTML = ''
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    output.innerHTML = '<h3>Paper covers rock. You lose!</h3>'
    playerOneIcon.innerHTML = '<i class="far fa-hand-rock fa-2x rock">'
    computerChoiceIcon.innerHTML = '<i class="fas fa-toilet-paper fa-2x"></i>'
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    output.innerHTML = '<h3>Rock crushes scissors. You win!</h3>'
    playerOneIcon.innerHTML = '<i class="far fa-hand-rock fa-2x rock">'
    computerChoiceIcon.innerHTML = '<i class="fas fa-cut fa-2x"></i>'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    output.innerHTML = '<h3>Paper covers rock. You win!</h3>'
    playerOneIcon.innerHTML = '<i class="fas fa-toilet-paper fa-2x"></i>'
    computerChoiceIcon.innerHTML = '<i class="far fa-hand-rock fa-2x rock">'
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    output.innerHTML = '<h3>Scissors cuts paper. You lose!</h3>'
    playerOneIcon.innerHTML = '<i class="fas fa-toilet-paper fa-2x"></i>'
    computerChoiceIcon.innerHTML = '<i class="fas fa-cut fa-2x"></i>'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    output.innerHTML = '<h3>Rock crushes scissors. You lose!</h3>'
    playerOneIcon.innerHTML = '<i class="fas fa-cut fa-2x"></i>'
    computerChoiceIcon.innerHTML = '<i class="far fa-hand-rock fa-2x rock">'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    output.innerHTML = '<h3>Scissors cuts paper. You win!</h3>'
  }
}
