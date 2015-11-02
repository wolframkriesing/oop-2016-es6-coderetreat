let cards = ['Hearts_9', 'Spades_Ace', 'Diamonds_Queen', 'Clubs_7', 'Spades_Jack', 'Diamonds_10', 'Hearts_King', 'Clubs_8'];

let shuffleCards = () => cards.sort((a, b) => Math.random() * 3 - 1);

console.log(shuffleCards());

