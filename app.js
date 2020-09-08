
document.querySelector('.rock').addEventListener('click', game)
document.querySelector('.paper').addEventListener('click', game)
document.querySelector('.scissors').addEventListener('click', game)
const output = document.querySelector('.output')
const playerIcon = document.querySelector('.player-choice-0')
const computerIcon = document.querySelector('.player-choice-1')

function getComputerChoice () {
  const computerChoices = ['rock', 'paper', 'scissors']
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  return computerChoice
}

const renderIcons = new Map()
renderIcons.set('rock', '<i class="far fa-hand-rock fa-2x rock">')
renderIcons.set('paper', '<i class="fas fa-toilet-paper fa-2x"></i>')
renderIcons.set('scissors', '<i class="fas fa-cut fa-2x"></i>')

function game (e) {
  const playerChoice = e.target.closest('button').classList.value
  const computerChoice = getComputerChoice()
  const playerChoseRock = playerChoice === 'rock'
  const playerChosePaper = playerChoice === 'paper'
  const playerChoseScissors = playerChoice === 'scissors'
  const computerChoseRock = computerChoice === 'rock'
  const computerChosePaper = computerChoice === 'paper'
  const computerChoseScissors = computerChoice === 'scissors'

  playerIcon.innerHTML = renderIcons.get(playerChoice)
  computerIcon.innerHTML = renderIcons.get(computerChoice)

  if (playerChoseRock && computerChosePaper) {
    output.innerHTML = '<h3>Paper covers rock. You lose!</h3>'
  } else if (playerChoseRock && computerChoseScissors) {
    output.innerHTML = '<h3>Rock crushes scissors. You win!</h3>'
  } else if (playerChosePaper && computerChoseRock) {
    output.innerHTML = '<h3>Paper covers rock. You win!</h3>'
  } else if (playerChosePaper && computerChoseScissors) {
    output.innerHTML = '<h3>Scissors cuts paper. You lose!</h3>'
  } else if (playerChoseScissors && computerChoseRock) {
    output.innerHTML = '<h3>Rock crushes scissors. You lose!</h3>'
  } else if (playerChoseScissors && computerChosePaper) {
    output.innerHTML = '<h3>Scissors cuts paper. You win!</h3>'
  } else {
    output.innerHTML = '<h3>Tie! Try again...</h3>'
    playerIcon.innerHTML = renderIcons.get(playerChoice)
    computerIcon.innerHTML = renderIcons.get(computerChoice)
  }
}
