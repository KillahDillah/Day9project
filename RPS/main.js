// Rock Paper Scissors Function
function rps (P1,P2) {
  if (P1 === 'rock' && P2 === 'paper' || P1 === 'paper' && P2 === 'rock') {
  	return 'paper beats rock'
  }
 
  if (P1 === 'scissors' && P2 === 'paper' || P1 === 'paper' && P2 === 'scissors') {
  	return 'scissors beats paper'
  }
  if(P1 === 'scissors' && P2 === 'rock' || P1 === 'rock' && P2 === 'scissors') {
  	return 'rock beats scissors'
  }
  if (P1 === P2) {
  	return 'It\'s a tie'
  }
  // write code here
}


// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));