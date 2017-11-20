'use strict';

var Card = require(__dirname + "/Card.js")

/**
 * class CardsBasicChecker
 * check cards is duplcate and count == 5
 */
class CardsBasicChecker  
{//{{{
    static isValidate(cards) {
        if (cards.length == 5) {
            var cardAndTypes = {
            };
            cardAndTypes[Card.SuitTypes.spade] = [];
            cardAndTypes[Card.SuitTypes.heart] = [];
            cardAndTypes[Card.SuitTypes.club] = [];
            cardAndTypes[Card.SuitTypes.diamond] = [];
            for (var index in cards) {
               if (!cardAndTypes[cards[index].suit][cards[index].number]) {
                   cardAndTypes[cards[index].suit][cards[index].number] = true;
               } else {
                   return false; //duplicate card
               }
            }
            return true;
        }
        return false;
    }
}//}}}

module.exports = CardsBasicChecker;
