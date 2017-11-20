'use strict';

var CardsBasicChecker = require(__dirname + "/CardsBasicChecker.js")

/**
 * class CardsIsStraightChecker
 * check cards is Straight(順子)
 */
class CardsIsStraightChecker extends CardsBasicChecker
{//{{{
    static isValidate(cards) {
        if (super.isValidate(cards)) {
            cards.sort(
                function(x, y) {
                    return x.number - y.number;
                }
            );
            var preCard = cards[0];
            for (var i = 1; i < cards.length ; i++) {
                var currentCard = cards[i];
                if (currentCard.number - preCard.number != 1) {
                    return false;
                } 
                preCard = currentCard;
            }
            return true;
        }
        return false;
    }
}//}}}

module.exports = CardsIsStraightChecker;
