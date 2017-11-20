'use strict';

var Card = require(__dirname + "/Card.js");
var CardDispatcher = require(__dirname + "/CardDispatcher.js");
var CardsBasicChecker = require(__dirname + "/CardsBasicChecker.js");
var CardsIsStraightChecker = require(__dirname + "/CardsIsStraightChecker.js");
var CardsIsFlushChecker = require(__dirname + "/CardsIsFlushChecker.js");
var CardsIsFullHouseChecker = require(__dirname + "/CardsIsFullHouseChecker.js");
var CardsIsStraightFlushChecker = require(__dirname + "/CardsIsStraightFlushChecker.js");

function renderCardsResult(cards)
{//{{{
    console.log("==========================================");
    console.log(cards);
    if (!CardsBasicChecker.isValidate(cards)) {
        console.log("duplicate card in it");
        return;

    }
    if (CardsIsFullHouseChecker.isValidate(cards)) {
        console.log("is full house(葫蘆)");
        return;
    }

    if (CardsIsStraightFlushChecker.isValidate(cards)) {
        console.log("is straight flush(同花順)");
        return;
    }

    if (CardsIsStraightChecker.isValidate(cards)) {
        console.log("is straight(順子)");
        return;
    }

    if (CardsIsFlushChecker.isValidate(cards)) {
        console.log("is flush(同花)");
        return;
    }
    console.log("no match");
}//}}}

var cardDispatcher = new CardDispatcher();
cardDispatcher.resetCards();
var cards = cardDispatcher.shiftCards(5);
renderCardsResult(cards);

//test cards
cards = [
	new Card(Card.SuitTypes.spade, 1),
	new Card(Card.SuitTypes.spade, 1), //duplicate card
	new Card(Card.SuitTypes.spade, 2), 
	new Card(Card.SuitTypes.spade, 3), 
	new Card(Card.SuitTypes.spade, 4), 
];
renderCardsResult(cards);

//full house(葫蘆)
cards = [
	new Card(Card.SuitTypes.spade, 1),
	new Card(Card.SuitTypes.heart, 1),
	new Card(Card.SuitTypes.club, 1), 
	new Card(Card.SuitTypes.spade, 2), 
	new Card(Card.SuitTypes.heart, 2), 
];
renderCardsResult(cards);


//Straight(順子)
cards = [
	new Card(Card.SuitTypes.spade, 5),
	new Card(Card.SuitTypes.heart, 4),
	new Card(Card.SuitTypes.spade, 3),
	new Card(Card.SuitTypes.spade, 2),
	new Card(Card.SuitTypes.spade, 1),
];
renderCardsResult(cards);


//flush(同花)
cards = [
	new Card(Card.SuitTypes.spade, 1),
	new Card(Card.SuitTypes.spade, 3),
	new Card(Card.SuitTypes.spade, 5), 
	new Card(Card.SuitTypes.spade, 7), 
	new Card(Card.SuitTypes.spade, 9), 
];
renderCardsResult(cards);

//straight flush(同花順)
cards = [
	new Card(Card.SuitTypes.spade, 5),
	new Card(Card.SuitTypes.spade, 4),
	new Card(Card.SuitTypes.spade, 3),
	new Card(Card.SuitTypes.spade, 2),
	new Card(Card.SuitTypes.spade, 1),
];
renderCardsResult(cards);


//error case
try {
    new Card(Card.SuitTypes.spade, 9999); //no normal cart init 
} catch (e) {
    console.log(e); //init error, suit shout be 0-3 and number >=1 && number <= 13
}

try {
    var cards = cardDispatcher.shiftCards(9999);//get 9999 cards
} catch (e) {
    console.log(e); //no enought to shift cards
}
