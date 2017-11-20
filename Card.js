'use strict';

/**
 * class Card
 * poker
 */
class Card {//{{{
    constructor(suit, number) {
        var isValidateSuit = false;
        for (var key in Card.SuitTypes) {
            if (Card.SuitTypes[key] == suit) {
                isValidateSuit = true;
                break;
            }
        }
        if (isValidateSuit == true && number >= 1 && number <= 13) {
            this.suit = suit;
            this.number = number;
        } else {
            throw "init error, suit shout be 0-3 and number >=1 && number <= 13";
        }
    }
};//}}}

/**
 * card suit enum
 */
Card.SuitTypes = {//{{{
    spade: 0,
    heart: 1,
    club: 2,
    diamond: 3,
};//}}}

module.exports = Card;
