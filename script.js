const BASE_URL = 'https://deckofcardsapi.com/api/deck/';


let deckId = '';
let playerHand = new Hand();
let dealerHand = new Hand();

// Get a new shuffled deck
async function createDeck() {

  const response = await fetch(`${BASE_URL}new/shuffle/?deck_count=1`);
  const data = await response.json();
  deckId = data.deck_id;
  console.log('Deck created:', deckId);
  
  drawCards();
} 


// Draw two cards for player and dealer
async function drawCards() {

    // Player
    const response = await fetch(`${BASE_URL}${deckId}/draw/?count=2`);
    const data = await response.json();
    data.cards.forEach(card => playerHand.addCard(card));
    updateHandDisplay('player', playerHand);

    // Dealer
    const dealerResponse = await fetch(`${BASE_URL}${deckId}/draw/?count=2`);
    const dealerData = await dealerResponse.json();
    dealerData.cards.forEach(card => dealerHand.addCard(card));
    updateHandDisplay('dealer', dealerHand);
    
    updateTotals();
} 

// Update the displayed hands
function updateHandDisplay(playerType, hand) {
  const handDiv = document.getElementById(`${playerType}-cards`);
  handDiv.innerHTML = hand.displayCards();
}

// Update totals based on the current hands
function updateTotals() {
  const playerTotal = playerHand.calculateTotal();
  document.getElementById('player-total').textContent = playerTotal;

  const dealerTotal = dealerHand.calculateTotal();
  document.getElementById('dealer-total').textContent = dealerTotal;
}

// Player Hit
async function hit() {

  const response = await fetch(`${BASE_URL}${deckId}/draw/?count=1`);
  const data = await response.json();
  playerHand.addCard(data.cards[0]);
  updateHandDisplay('player', playerHand);
  updateTotals();
  
  const playerTotal = playerHand.calculateTotal();
  if (playerTotal > 21) {
    alert('You bust! Dealer wins.');
    disableGame();
  }
} 


// Player Stand
async function stand() {
  let dealerTotal = dealerHand.calculateTotal();
  
  // Dealer draws cards until they reach 17 or more
  while (dealerTotal < 17) {
    const response = await fetch(`${BASE_URL}${deckId}/draw/?count=1`);
    const data = await response.json();
    dealerHand.addCard(data.cards[0]);
    updateHandDisplay('dealer', dealerHand);
    dealerTotal = dealerHand.calculateTotal();
    updateTotals();
  }
  
  // Determine winner
  const playerTotal = playerHand.calculateTotal();
  if (dealerTotal > 21 || playerTotal > dealerTotal) {
    alert('You win!');
  } else if (playerTotal === dealerTotal) {
    alert('It\'s a tie!');
  } else {
    alert('Dealer wins!');
  }
  

  disableGame();
}



function disableGame() {
  document.getElementById('hit-button').disabled = true;
  document.getElementById('stand-button').disabled = true;
}

// Event listeners for buttons
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);

// Start the game when the page loads
window.onload = createDeck;
