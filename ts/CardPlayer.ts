/// <reference path="Card.ts" />
/// <reference path="Player.ts" />
class CardPlayer extends Player{
    hand: Card[];

    constructor(player: Player){
        super(player.Name, player.Wallet);
        this.hand = [];
    }

    getHand(): Card[]{
        return this.hand;
    }

    clearHand(){
        while(this.hand.length>0)
            this.hand.pop();
    }

    displayPlayerHand(): String{
        var output =" ";
        
        for(var i= 0; i< this.hand.length; i++){
            output += this.hand[i].getValue() + ", ";
        }
        return output;
    }

    displayPlayerHandImages(id:string) {
        for(var i= 0; i< this.hand.length; i++){
            displayCard(this.hand[i].getValue(),this.hand[i].getSuit(),id)
        }
       
    }

    displayPlayerHandImageByIndex(index:number,id:string){
        displayCard(this.hand[index].getValue(),this.hand[index].getSuit(),id)
    }

    addCardToHand(card: Card){
        this.hand.push(card);
    }

    hasCardOfValue(cardValueAsked: String): boolean{
        for(var i = 0; i < this.hand.length; i++){
            if(cardValueAsked == this.hand[i].getValue()){
                return true;
            }
        }
        return false;
    }
    
    getCardByValue(cardValueAsked: String): Card{
        for(var i = 0; i < this.hand.length; i++){
            if(cardValueAsked == this.hand[i].getValue()){
                var cardToReturn = this.hand[i];
                this.hand = this.hand.filter(e => e != cardToReturn);
                return cardToReturn;
            }
        }
        return undefined;
    }
}

// var cardPlayer = new CardPlayer();
// var card = new Card("Queen", "Hearts");
// var card2 = new Card("King", "Clubs");
// var card3 = new Card("7", "Spades");
// cardPlayer.addCardToHand(card);
// cardPlayer.addCardToHand(card2);
// cardPlayer.addCardToHand(card3);
// cardPlayer.hasCardOfValue("Queen");
// console.log(cardPlayer.hasCardOfValue("Queen"));
// console.log(cardPlayer.getCardByValue("Queen"));
// console.log(cardPlayer.hasCardOfValue("Queen"));
// console.log(cardPlayer.getHand());
