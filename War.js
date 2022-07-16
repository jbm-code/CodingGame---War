// We are interested in the value of the cards only, so stripping the color when reading in the decks at the beginning is totally fine

var deck1 = []; ////Each player gets a variable number of cards of the beginning of the game: that's the player's deck
var deck2 = [];

function value(a) {
  var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  return cards.indexOf(a.substr(0, a.length - 1)); //The cards are ordered by value, from weakest to strongest
}

var n = +readline();
for (var i = 0; i < n; i++) {
  deck1.push(value(readline())); 
}
var n = +readline();
for (var i = 0; i < n; i++) {
  deck2.push(value(readline())); 
}

  var round = 1;

  var pot1 = [];
  var pot2 = [];
  
  while (1) {
  
    var card1 = deck1.shift();  ////The shift() method returns the first elementof the array:
    var card2 = deck2.shift();
  
    if (card1 !== card2) {
  
      pot1.push(card1);
      pot2.push(card2);
  
      if (card1 > card2) deck1 = deck1.concat(pot1, pot2);  //When a player wins a battle, they put back the cards at the bottom of their deck
                    else deck2 = deck2.concat(pot1, pot2);
      pot1 = [];
      pot2 = [];
  
      if (deck2.length === 0) {
        console.log("1 " + round);  //Game output :the player number followed by the number of game rounds separated by a space character
        break;
      }
  
      if (deck1.length === 0) {
        console.log("2 " + round);  //Game output :the player number followed by the number of game rounds separated by a space character
        break;
      }
  
      round++;  // A war or a succession of wars count as one game round.
  
    } else if (deck1.length < 3 || deck2.length < 3) {
      console.log('PAT');  //If players are equally first: PAT
      break;

    } else {   //If the two cards played are of equal value, then there is a "war"
  
      pot1.push(card1);
      pot2.push(card2);
  
      pot1.push(deck1.shift()); //First, both players place the three next cards of their pile face down. 
      pot1.push(deck1.shift()); //The shift() method returns the first elementof the array:
      pot1.push(deck1.shift());
  
      pot2.push(deck2.shift());
      pot2.push(deck2.shift());
      pot2.push(deck2.shift());
    }
  }
