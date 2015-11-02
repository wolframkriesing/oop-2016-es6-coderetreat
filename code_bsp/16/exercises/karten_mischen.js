let cards = ['Hearts_9', 'Spades_Ace', 'ahdfkjsdhfkjhasdkf', 
             'Diamonds_Queen', 
             'Clubs_7', 'Spades', 'Diamonds_10', 
             'Hearts_King', '8'];

let shuffle = 
    (cards) => cards.sort(() => Math.random() - 0.5);

console.log(shuffle(cards));
