# CardGame
CardGame
1. 52張撲克牌, 洗牌
2. 抽出五張牌, 判斷 順子, 葫蘆, 同花順

# ENV
- node v7.10.0 

# RUN
``` node app.js```

# Sample Code
```
'use strict';
var Card = require(__dirname + "/Card.js");
var CardsIsStraightFlushChecker = require(__dirname + "/CardsIsStraightFlushChecker.js");

var cards = [
	new Card(Card.SuitTypes.spade, 5),
	new Card(Card.SuitTypes.spade, 4),
	new Card(Card.SuitTypes.spade, 3),
	new Card(Card.SuitTypes.spade, 2),
	new Card(Card.SuitTypes.spade, 1),
   ];
console.log( "is straight flush(同花順) : " + CardsIsStraightFlushChecker.isValidate(cards));
//result:
//is straight flush(同花順) : true
```

# Classes
## Card

## CardDispatcher
發牌人
### function 
- resetCards
重新設定(新建52張牌 and 洗牌)

- shuffleCards
洗牌

- shiftCards(count)
發牌

## CardsBasicChecker
### function 
- isValidate(cards)
check cards is duplcate and count == 5

## CardsIsStraightChecker extends CardsBasicChecker
### function 
- isValidate(cards)
check cards is Straight(順子)


## CardsIsFlushChecker extends CardsBasicChecker
### function 
- isValidate(cards)
check cards is Flush(同花)

## CardsIsFullHouseChecker extends CardsBasicChecker
### function 
- isValidate(cards)
check cards is full house(葫蘆)

## CardsIsStraightFlushChecker extends CardsIsStraightChecker
### function 
- isValidate(cards)
check cards is straight flush(同花順)


