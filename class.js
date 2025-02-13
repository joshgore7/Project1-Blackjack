
class Hand {
	constructor() {
	  this.cards = [];
	}
  

	addCard(card) {
	  this.cards.push(card);
	}
  
	// Calculate the total value of the hand
	calculateTotal() {
	  let total = 0;
	  let aceCount = 0;
  

	  this.cards.forEach(card => {
		if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
		  total += 10;
		} else if (card.value === 'ACE') {
		  aceCount++;
		  total += 11;
		} else {
		  total += parseInt(card.value); 
		}
	  });
  
	  // Adjust for Ace if total exceeds 21
	  while (total > 21 && aceCount > 0) {
		total -= 10;
		aceCount--;
	  }
  
	  return total;
	}
  

	displayCards() {
	  return this.cards.map(card => `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`).join('');
	}
  }
  


//Basic Strategy
basicStrategy = {
	hard: {
		2: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		3: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'hit', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		4: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'stand', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		5: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'stand', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		6: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'double', 10: 'double', 11: 'double', 12: 'stand', 13: 'stand', 14: 'stand', 15: 'stand', 16: 'stand', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		7: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		8: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		9: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'double', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		10: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		11: {5: 'hit', 6: 'hit', 7: 'hit', 8: 'hit', 9: 'hit', 10: 'hit', 11: 'double', 12: 'hit', 13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'stand', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
	},
	soft: {
		2: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		3: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		4: {13: 'hit', 14: 'hit', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		5: {13: 'double', 14: 'double', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'stand', 20: 'stand', 21: 'stand'},
		6: {13: 'double', 14: 'double', 15: 'double', 16: 'double', 17: 'double', 18: 'double', 19: 'double', 20: 'stand', 21: 'stand'},
		7: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		8: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'stand', 19: 'stand', 20: 'stand', 21: 'stand'},
		9: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
		10: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
		11: {13: 'hit', 14: 'hit', 15: 'hit', 16: 'hit', 17: 'hit', 18: 'hit', 19: 'stand', 20: 'stand', 21: 'stand'},
	},
	pair: {
		2: {2: 'split', 3: 'split', 4: 'hit', 5: 'double', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		3: {2: 'split', 3: 'split', 4: 'hit', 5: 'double', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		4: {2: 'split', 3: 'split', 4: 'hit', 5: 'double', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		5: {2: 'split', 3: 'split', 4: 'split', 5: 'double', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		6: {2: 'split', 3: 'split', 4: 'split', 5: 'double', 6: 'split', 7: 'split', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		7: {2: 'split', 3: 'split', 4: 'hit', 5: 'double', 6: 'hit', 7: 'split', 8: 'split', 9: 'stand', 10: 'stand', 11: 'split'},
		8: {2: 'hit', 3: 'hit', 4: 'hit', 5: 'double', 6: 'hit', 7: 'hit', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		9: {2: 'hit', 3: 'hit', 4: 'hit', 5: 'double', 6: 'hit', 7: 'hit', 8: 'split', 9: 'split', 10: 'stand', 11: 'split'},
		10: {2: 'hit', 3: 'hit', 4: 'hit', 5: 'hit', 6: 'hit', 7: 'hit', 8: 'split', 9: 'stand', 10: 'stand', 11: 'split'},
		11: {2: 'hit', 3: 'hit', 4: 'hit', 5: 'hit', 6: 'hit', 7: 'hit', 8: 'split', 9: 'stand', 10: 'stand', 11: 'split'}
	}
};