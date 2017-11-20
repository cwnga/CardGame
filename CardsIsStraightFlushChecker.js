'use strict';

var CardsIsStraightChecker = require(__dirname + "/CardsIsStraightChecker.js")
var CardsIsFlushChecker = require(__dirname + "/CardsIsFlushChecker.js")

/**
 * class CardsIsStraightFlushChecker
 * check cards is straight flush(同花順)
 */
class CardsIsStraightFlushChecker  extends CardsIsStraightChecker
{//{{{
    static isValidate(cards) {
        return super.isValidate(cards) && CardsIsFlushChecker.isValidate(cards);
    }
}//}}}

module.exports = CardsIsStraightFlushChecker;
