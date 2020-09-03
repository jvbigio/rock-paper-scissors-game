
document.querySelector('.rock').addEventListener('click', rockPaperScissors)
document.querySelector('.paper').addEventListener('click', rockPaperScissors)
document.querySelector('.scissors').addEventListener('click', rockPaperScissors)

// function getIcons (iconType, text) {
//   let displayIcon
//   switch (iconType) {
//     case 'rock':
//       displayIcon = '<i class="far fa-hand-rock fa-2x rock">'
//       break
//     case 'paper':
//       displayIcon = '<i class="fas fa-toilet-paper fa-2x"></i>'
//       break
//     case 'scissors':
//       displayIcon = '<i class="fas fa-cut fa-2x"></i>'
//       break
//   }
//   return displayIcon
// }

// function rockBeatsScissors () {
//   const output = 'Rock crushes scissors'

//   const displayIcon = getIcons('rock', output)
//   document.querySelector('.output').innerHTML = output
// }

function renderComputerIcons () {
  const computerChoices = ['rock', 'paper', 'scissors']
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  // console.log(`Computer chose ${computerChoice}`)
  return computerChoice
}

// function getIcons () {
const renderIcons = new Map()
renderIcons.set('rock', '<i class="far fa-hand-rock fa-2x rock">')
renderIcons.set('paper', '<i class="fas fa-toilet-paper fa-2x"></i>')
renderIcons.set('scissors', '<i class="fas fa-cut fa-2x"></i>')
renderIcons.set('tie', '<i class="fas fa-skull-crossbones fa-2x"></i>')

// for (const [key, value] of renderIcons.entries()) {

// }
// }
// getIcons()

function rockPaperScissors (e) {
  // renderComputerIcons()
  // const rockIcon = '<i class="far fa-hand-rock fa-2x rock">'
  // const paperIcon = '<i class="fas fa-toilet-paper fa-2x"></i>'
  // const scissorsIcon = '<i class="fas fa-cut fa-2x"></i>'
  // const tie = '<i class="fas fa-skull-crossbones fa-2x"></i>'
  const output = document.querySelector('.output')
  const chosenPlay = document.querySelectorAll('.choice')
  // const computerChoices = ['rock', 'paper', 'scissors']
  // const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  const playerIcon = document.querySelector('.player-choice-0')
  const computerIcon = document.querySelector('.player-choice-1')
  const playerChoice = e.target.closest('button').classList.value
  // renderComputerIcons()
  const computerChoice = renderComputerIcons()

  renderIcons.forEach((value, key) => {
    if (playerChoice === key && computerChoice === key) {
      output.innerHTML = '<h3>Tie! Try again...</h3>'
      playerIcon.innerHTML = value
      computerIcon.innerHTML = value
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      output.innerHTML = '<h3>Paper covers rock. You lose!</h3>'
      playerIcon.innerHTML = renderIcons.get('rock')
      computerIcon.innerHTML = renderIcons.get('paper')
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      output.innerHTML = '<h3>Rock crushes scissors. You win!</h3>'
      playerIcon.innerHTML = renderIcons.get('rock')
      computerIcon.innerHTML = renderIcons.get('scissors')
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      output.innerHTML = '<h3>Paper covers rock. You win!</h3>'
      playerIcon.innerHTML = renderIcons.get('paper')
      computerIcon.innerHTML = renderIcons.get('rock')
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      output.innerHTML = '<h3>Scissors cuts paper. You lose!</h3>'
      playerIcon.innerHTML = renderIcons.get('paper')
      computerIcon.innerHTML = renderIcons.get('scissors')
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      output.innerHTML = '<h3>Rock crushes scissors. You lose!</h3>'
      playerIcon.innerHTML = renderIcons.get('scissors')
      computerIcon.innerHTML = renderIcons.get('rock')
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      output.innerHTML = '<h3>Scissors cuts paper. You win!</h3>'
      playerIcon.innerHTML = renderIcons.get('scissors')
      computerIcon.innerHTML = renderIcons.get('paper')
    }
  })
  setTimeout(_ => {
    playerIcon.innerHTML = ''
    computerIcon.innerHTML = ''
    output.textContent = ''
  }, 2000)
}
// })
// chosenPlay.forEach(play => {
//   console.log(play)
//   for (const [key, value] of renderIcons.entries()) {
//     if (key) {
//       play.innerHTML = value
//       play.innerHTML = value
//     }
//   }
// })
// WORKS BUT ONLY FOR PLAYER 1:
// console.log(playerChoice)
// console.log(computerChoice)
// chosenPlay.forEach(play => {
// console.log(play) // player-choice-0, player-choice-1
//   for (const [key, value] of renderIcons.entries()) {
// if ((playerChoice === key && computerChoice === key)) {
//   playerIcon.innerHTML = value
//   computerIcon.innerHTML = value
//   output.innerHTML = '<h3>Tie! Try again...</h3>'
// } else if (playerChoice === key || computerChoice === key) {
//   playerIcon.innerHTML = value
//   computerIcon.innerHTML = value
// }
//   }
//   // })
// }

// WORKING APP BELOW, KEEP BUT REFACTOR ABOVE //
// function rockPaperScissors(e) {
//   const rockIcon = '<i class="far fa-hand-rock fa-2x rock">'
//   const paperIcon = '<i class="fas fa-toilet-paper fa-2x"></i>'
//   const scissorsIcon = '<i class="fas fa-cut fa-2x"></i>'
//   const tie = '<i class="fas fa-skull-crossbones fa-2x"></i>'

//   const output = document.querySelector('.output')
//   const chosenPlay = document.querySelectorAll('.choice')
//   const computerChoices = ['rock', 'paper', 'scissors']
//   const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
//   const playerOneIcon = document.querySelector('.player-choice-0')
//   const computerChoiceIcon = document.querySelector('.player-choice-1')

//   const playerChoice = e.target.closest('button').classList.value

//   if (playerChoice === computerChoice) {
//     output.innerHTML = '<h3>Tie! Try again...</h3>'
//     playerIcon.innerHTML = tie
//     computerIcon.innerHTML = tie
//   } else if (playerChoice === 'rock' && computerChoice === 'paper') {
//     output.innerHTML = '<h3>Paper covers rock. You lose!</h3>'
//     playerIcon.innerHTML = rockIcon
//     computerIcon.innerHTML = paperIcon
//   } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
//     output.innerHTML = '<h3>Rock crushes scissors. You win!</h3>'
//     playerIcon.innerHTML = rockIcon
//     computerIcon.innerHTML = scissorsIcon
//   } else if (playerChoice === 'paper' && computerChoice === 'rock') {
//     output.innerHTML = '<h3>Paper covers rock. You win!</h3>'
//     playerIcon.innerHTML = paperIcon
//     computerIcon.innerHTML = rockIcon
//   } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
//     output.innerHTML = '<h3>Scissors cuts paper. You lose!</h3>'
//     playerIcon.innerHTML = paperIcon
//     computerIcon.innerHTML = scissorsIcon
//   } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
//     output.innerHTML = '<h3>Rock crushes scissors. You lose!</h3>'
//     playerIcon.innerHTML = scissorsIcon
//     computerIcon.innerHTML = rockIcon
//   } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
//     output.innerHTML = '<h3>Scissors cuts paper. You win!</h3>'
//     playerIcon.innerHTML = scissorsIcon
//     computerIcon.innerHTML = paperIcon
//   }
// }
