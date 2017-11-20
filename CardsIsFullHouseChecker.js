'use strict';

var CardsBasicChecker = require(__dirname + "/CardsBasicChecker.js")

/**
 * class CardsIsFullHouseChecker
 * check cards is full house(葫蘆)
 */
class CardsIsFullHouseChecker  extends CardsBasicChecker
{//{{{
    static isValidate(cards) {
        if (super.isValidate(cards)) {
            var countNumberCounts = [];//
            for (var i = 0; i < cards.length ; i++) {
                if (countNumberCounts[cards[i].number]) {
                    countNumberCounts[cards[i].number]++;
                } else {
                    countNumberCounts[cards[i].number] = 1;
                }

            }
            countNumberCounts.sort();
            if (countNumberCounts.length >= 2 && 
                countNumberCounts[0] == 2 && 
                countNumberCounts[1] == 3) {

            	return true;
            }
            return false;
        }
        return false;
    }
}//}}}

module.exports = CardsIsFullHouseChecker;

