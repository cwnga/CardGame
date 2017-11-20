'use strict';

var Card = require(__dirname + "/Card.js")

/**
 * class CardDispatcher
 * card dispatcher
 * functions: resetCards, shuffleCards, shiftCards
 */
class CardDispatcher {//{{{
    constructor() {
        this.cards = [];
        this.resetCards = function () {
            for (var suit in Card.SuitTypes) {
                for (var number = 1; number < 14; number ++) {
                    var card = new Card(Card.SuitTypes[suit], number);
                    this.cards.push(card);
                }
            }
            this.shuffleCards();
        }

        this.shuffleCards = function () {
            var j, x, i;
            for (i = this.cards.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = x;
            }
        }

        this.shiftCards = function(countToShift) {
            if (countToShift <= 0) {
                throw "please input count to shift cards";
            }
            if (countToShift > this.cards.length || this.cards.length <= 0) {
                throw  "no enought to shift cards";
            }
            var returnCards = [];
            for (var i = 0; i < countToShift; i ++) {
              returnCards.push(this.cards.shift());
            }
            return returnCards;
        }
    }

}//}}}

module.exports = CardDispatcher;
