'use strict';

var CardsBasicChecker = require(__dirname + "/CardsBasicChecker.js")

/**
 * class CardsIsFlushChecker
 * check cards is Flush(同花)
 */
class CardsIsFlushChecker  extends CardsBasicChecker
{//{{{
    static isValidate(cards) {
        if (super.isValidate(cards)) {
            var suit = cards[0].suit;
            for (var i = 1; i < cards.length ; i++) {
                if (suit != cards[i].suit) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}//}}}

module.exports = CardsIsFlushChecker;
