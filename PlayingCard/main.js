//Variables

let suits = ["♣", "♠", "♡", "♢"];
let rdmCard;
let rdmCard2;
let deck = shuffleDeck(makeDeck());
let shuffledDeck = shuffleDeck(deck);
let history = [];
let currentIndex;




//1. Reverse function of 1
function reverseToLetter(letter) {
  if (letter == "A") {
    return "1";
  } else if (letter == "J") {
    return "11";
  } else if (letter == "Q") {
    return "12";
  } else if (letter == "K") {
    return "13";
  } else {
    return letter;
  }
}

//2.For letter Cards
function specialCard(num) {
  if (num == 13) {
    return "K";
  } else if (num == 12) {
    return "Q";
  } else if (num == 11) {
    return "J";
  } else if (num == 1) {
    return "A";
  } else {
    return num;
  }
}



//Creating Deck
function makeDeck() {
  let deck = [];
  for (const suit of suits) {
    for (let start = 1; start <= 13; start++) {
      deck.push(suit + specialCard(start));
    }
  }
  return deck;
}


//random value with the range
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


//3. ***Main function***
function shuffleDeck(arrayInput) {
  // copy
  let deck = arrayInput.slice();

  var currentIndex = deck.length - 1;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    let randomIndex = getRandomInt(currentIndex);

    // And swap it with the current element.
    let temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;

    currentIndex--;
  }

  return deck;
}



// Converting suits to Words
function suitToWords(symb) {
  if (symb == "♠") {
    return "Spades";
  } else if (symb == "♡") {
    return "Hearts";
  } else if (symb == "♢") {
    return "Diamonds";
  } else if (symb == "♣") {
    return "Clubs";
  } else {
    return symb;
  }
}


// Converting value to words
function valueToWords(num) {
  if (num == "A") {
    return "Ace";
  } else if (num == "2") {
    return "Two";
  } else if (num == "3") {
    return "Three";
  } else if (num == "4") {
    return "Four";
  } else if (num == "5") {
    return "Five";
  } else if (num == "6") {
    return "Six";
  } else if (num == "7") {
    return "Seven";
  } else if (num == "8") {
    return "Eight";
  } else if (num == "9") {
    return "Nine";
  } else if (num == "10") {
    return "Ten";
  } else if (num == "J") {
    return "Jack";
  } else if (num == "Q") {
    return "Queen";
  } else if (num == "K") {
    return "King";
  }
}


function cardStringReverse(word) {
  // Ace
  if (word == "Ace of Clubs") {
    return "♣A";
  } else if (word == "Ace of Hearts") {
    return "♡A";
  } else if (word == "Ace of Diamonds") {
    return "♢A";
  } else if (word == "Ace of Spades") {
    return "♠A";
    //Two
  } else if (word == "Two of Clubs") {
    return "♣2";
  } else if (word == "Two of Hearts") {
    return "♡2";
  } else if (word == "Two of Diamonds") {
    return "♢2";
  } else if (word == "Two of Spades") {
    return "♠2";
    //Three
  } else if (word == "Three of Hearts") {
    return "♡3";
  } else if (word == "Three of Diamonds") {
    return "♢3";
  } else if (word == "Three of Spades") {
    return "♠3";
  } else if (word == "Three of Clubs") {
    return "♣3";
    //Four
  } else if (word == "Four of Hearts") {
    return "♡4";
  } else if (word == "Four of Diamonds") {
    return "♢4";
  } else if (word == "Four of Spades") {
    return "♠4";
  } else if (word == "Four of Clubs") {
    return "♣4";
    //Five
  } else if (word == "Five of Hearts") {
    return "♡5";
  } else if (word == "Five of Diamonds") {
    return "♢5";
  } else if (word == "Five of Spades") {
    return "♠5";
  } else if (word == "Five of Clubs") {
    return "♣5";
    //Six
  } else if (word == "Six of Hearts") {
    return "♡6";
  } else if (word == "Six of Diamonds") {
    return "♢6";
  } else if (word == "Six of Spades") {
    return "♠6";
  } else if (word == "Six of Clubs") {
    return "♣6";
    //Seven
  } else if (word == "Seven of Hearts") {
    return "♡7";
  } else if (word == "Seven of Diamonds") {
    return "♢7";
  } else if (word == "Seven of Spades") {
    return "♠7";
  } else if (word == "Seven of Clubs") {
    return "♣7";
    //Eight
  } else if (word == "Eight of Hearts") {
    return "♡8";
  } else if (word == "Eight of Diamonds") {
    return "♢8";
  } else if (word == "Eight of Spades") {
    return "♠8";
  } else if (word == "Eight of Clubs") {
    return "♣8";
    //Nine
  } else if (word == "Nine of Hearts") {
    return "♡9";
  } else if (word == "Nine of Diamonds") {
    return "♢9";
  } else if (word == "Nine of Spades") {
    return "♠9";
  } else if (word == "Nine of Clubs") {
    return "♣9";
    //Ten
  } else if (word == "Ten of Hearts") {
    return "♡10";
  } else if (word == "Ten of Diamonds") {
    return "♢10";
  } else if (word == "Ten of Spades") {
    return "♠10";
  } else if (word == "Ten of Clubs") {
    return "♣10";
    //Jack
  } else if (word == "Jack of Hearts") {
    return "♡J";
  } else if (word == "Jack of Diamonds") {
    return "♢J";
  } else if (word == "Jack of Spades") {
    return "♠J";
  } else if (word == "Jack of Clubs") {
    return "♣J";
    //Queen
  } else if (word == "Queen of Hearts") {
    return "♡Q";
  } else if (word == "Queen of Diamonds") {
    return "♢Q";
  } else if (word == "Queen of Spades") {
    return "♠Q";
  } else if (word == "Queen of Clubs") {
    return "♣Q";
    //King
  } else if (word == "King of Hearts") {
    return "♡K";
  } else if (word == "King of Diamonds") {
    return "♢K";
  } else if (word == "King of Spades") {
    return "♠K";
  } else if (word == "King of Clubs") {
    return "♣K";
  }
}



function dealCard(array) {
  let randomIndex = getRandomInt(array.length);
  let randomCard = array[randomIndex];

  let [suit, ...card_value] = randomCard;

  suit = suitToWords(suit[0]);

  if (card_value.length == 2) {
    card_value = [card_value[0] + card_value[1]];
  }
  card_value = valueToWords(card_value[0]);
  let rdmCardStr = card_value + " of " + suit;

  //Updating the Deck!!!!!!!!!
  array.splice(randomIndex, 1);

  return rdmCardStr;
}


function dealtCard(givenCard) {
  let [suit, ...card_value] = givenCard;
  
  suit = suitToWords(suit[0]);

  if (card_value.length == 2) {
    card_value = [card_value[0] + card_value[1]];
  }
  card_value = valueToWords(card_value[0]);
  let givenCardStr = card_value + " of " + suit + " " + givenCard;

  return { givenCardStr, givenCard };
}


function disableBtn(value = true) {
  document.getElementById("prevBtn").disabled = value;
  document.getElementById("nxtBtn").disabled = value;
}


function drawCard() {
  rdmCard = dealCard(deck);
  rdmCard2 = cardStringReverse(rdmCard);
  currentIndex = history.length - 1;
  if (history.length > 1) {
    document.getElementById("prevBtn").disabled = false;
  }
 
  
document.getElementById("nxtBtn").disabled = true;
  if (deck.length > 0) {
    document.getElementById(
      "p2"
    ).innerHTML = `Card Dealt: ${rdmCard} , ${rdmCard2}`;
    document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
    document.getElementById("p4").innerHTML = `Live View: ${deck}`;
    drawHistory();
  } else {
    alert("You need to reshuffle.");
    deck = shuffleDeck(history);
    history = [];
    currentIndex = null;
    document.getElementById(
      "p2"
    ).innerHTML = `Dealt: ${rdmCard} , ${rdmCard2}`;
    document.getElementById("p3").innerHTML = `Remaining: ${deck.length}`;
    document.getElementById("p4").innerHTML = `Live Preview: ${deck}`;
    document.getElementById("p5").innerHTML = `Draw History: ${history}`;
  }
}

function prev() {
  currentIndex--;
  let givenCard = history[currentIndex];
  const { givenCardStr } = dealtCard(givenCard);

  document.getElementById("p2").innerHTML = `Previous: ${givenCardStr}`;

  if (currentIndex <= 0) {
    document.getElementById("prevBtn").disabled = true;
  }

  document.getElementById("nxtBtn").disabled = false;
}


function next() {
  currentIndex++;
  let givenCard = history[currentIndex];

  const { givenCardStr } = dealtCard(givenCard);

  document.getElementById("p2").innerHTML = `Next: ${givenCardStr}`;

  if (currentIndex >= history.length - 1) {
    document.getElementById("nxtBtn").disabled = true;
    document.getElementById("p2").innerHTML = `Card Dealt: ${givenCardStr}`;
  }
  document.getElementById("prevBtn").disabled = false;
}


function drawHistory() {
  history.push(rdmCard2);
  document.getElementById("p5").innerHTML = `Draw History: ${history}`;
}


function reShuffle() {
  deck = shuffleDeck(deck.concat(history));
  history = [];
  
  shuffledDeck.length = 52;
  document.getElementById("p2").innerHTML = `Card Here:`;
  document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
  document.getElementById("p4").innerHTML = `Live Preview: ${deck}`;
  document.getElementById("p5").innerHTML = `Draw History: ${history}`;
}


function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


disableBtn();
document.getElementById("p2").innerHTML = `Card Here:`;
document.getElementById("p3").innerHTML = `Cards remaining: ${deck.length}`;
document.getElementById("p4").innerHTML = `Live View: ${deck}`;
document.getElementById("p5").innerHTML = `Draw History: ${history}`;
