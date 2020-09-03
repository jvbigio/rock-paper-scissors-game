
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
renderIcons.set('tie', '<i class="fas fa-skull-crossbones fa-2x"></i>')

function tie (value) {
  output.innerHTML = '<h3>Tie! Try again...</h3>'
  playerIcon.innerHTML = value
  computerIcon.innerHTML = value
}

function rockPaper () {
  output.innerHTML = '<h3>Paper covers rock. You lose!</h3>'
  playerIcon.innerHTML = renderIcons.get('rock')
  computerIcon.innerHTML = renderIcons.get('paper')
}

function rockScissors () {
  output.innerHTML = '<h3>Rock crushes scissors. You win!</h3>'
  playerIcon.innerHTML = renderIcons.get('rock')
  computerIcon.innerHTML = renderIcons.get('scissors')
}

function paperRock () {
  output.innerHTML = '<h3>Paper covers rock. You win!</h3>'
  playerIcon.innerHTML = renderIcons.get('paper')
  computerIcon.innerHTML = renderIcons.get('rock')
}

function paperScissors () {
  output.innerHTML = '<h3>Scissors cuts paper. You lose!</h3>'
  playerIcon.innerHTML = renderIcons.get('paper')
  computerIcon.innerHTML = renderIcons.get('scissors')
}

function scissorsRock () {
  output.innerHTML = '<h3>Rock crushes scissors. You lose!</h3>'
  playerIcon.innerHTML = renderIcons.get('scissors')
  computerIcon.innerHTML = renderIcons.get('rock')
}

function scissorsPaper () {
  output.innerHTML = '<h3>Scissors cuts paper. You win!</h3>'
  playerIcon.innerHTML = renderIcons.get('scissors')
  computerIcon.innerHTML = renderIcons.get('paper')
}

function game (e) {
  const playerChoice = e.target.closest('button').classList.value
  const computerChoice = getComputerChoice()

  renderIcons.forEach((value, key) => {
    if (playerChoice === key && computerChoice === key) {
      tie(value)
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      rockPaper()
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      rockScissors()
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      paperRock()
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      paperScissors()
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      scissorsRock()
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      scissorsPaper()
    }
  })
}
