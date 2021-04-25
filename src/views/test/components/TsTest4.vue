<template>
  <div class="name"></div>
</template>
<script lang="ts">
import { onMounted } from 'vue';

export default {
  data() {
    return {

    };
  },
  setup(props: object, context: object) {
    console.log('%c --------------------函数--------------------', 'color:red;');
    function add(x: number, y: number): number {
      return x + y;
    }
    let myAdd = function(x: number, y: number): number {
      return x + y;
    };
    let myAdd1: (baseValue: number, increment: number) => number = function(x: number, y: number): number {
      return x + y;
    };
    let myAdd2 = function(x: number, y: number): number {
      return x + y;
    };
    let myAdd3: (baseValue: number, increment: number) => number = function(x, y) {
      return x + y;
    };
    function buildName(firstName: string, lastName: string) {
      return firstName + '' + lastName;
    }
    // let result1 = buildName('Bob');
    // let result2 = buildName('Bob', 'Admas', 'Sr.');
    let result3 = buildName('Bob', 'Adams');
    function buildName1(firstName: string, lastName?: string) {
      if (lastName) {
        return firstName + '' + lastName;
      } else {
        return firstName;
      }
    }
    let result4 = buildName1('Bob');
    // let result5 = buildName1('Bob', 'Adams', 'Sr.');
    let result6 = buildName1('Bob', 'Adams');
    function buildName2(firstName: string, lastName = 'Smith') {
      return firstName + '' + lastName;
    }
    let result7 = buildName2('Bob');
    let result8 = buildName2('Bob', undefined);
    // let result9 = buildName2('Bob', 'Adams', 'Sr.');
    let result10 = buildName2('Bob', 'Adams');
    function buildName3(firstName = 'Will', lastName: string) {
      return firstName + '' + lastName;
    }
    // let result11 = buildName3('Bob');
    // let result12 = buildName3('Bob', 'Adams', 'Sr.');
    let result13 = buildName3('Bob', 'Adams');
    let result14 = buildName3(undefined, 'Adams');
    function buildName4(firstName: string, ...restOfName: string[]) {
      return firstName + '' + restOfName.join(' ');
    }
    let employeeName = buildName4('Joseph', 'Samue1', 'Lucas', 'MacKinzie');
    function buildName5(firstName: string, ...restOfName: string[]) {
      return firstName + '' + restOfName.join('');
    }
    let buildNameFun: (fname: string, ...rest: string[]) => string = buildName5;
    let deck = {
      suits: ['hearts', 'spades', 'clubs', 'diamonds'],
      cards: Array(52),
      createCardPicker: function() {
        return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
      }
    };
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    alert('card：' + pickedCard.card + ' of ' + pickedCard.suit);
    interface Card {
      suit: string;
      card: number;
    }
    interface Deck {
      suits: string[];
      cards: number[];
      createCardPicker(this: Deck): () => Card;
    }
    let deck1: Deck = {
      suits: ['hearts', 'spades', 'clubs', 'diamonds'],
      cards: Array(52),
      createCardPicker: function(this: Deck) {
        return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
      }
    }
    let cardPicker1 = deck1.createCardPicker();
    let pickedCard1 = cardPicker();
    alert('card：' + pickedCard.card + ' of ' + pickedCard.suit);
    interface UIElement {
      addClickListner(onclick: (this: void, e: Event) => void): void;
    }
    class Handler {
      info: string = '';
      onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
      }
    }
    let h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
    // class Handler1{
    //   info: string='';
    //   onCickGood=(e.Event)=>{this.info=e.message};
    // }
    // let suits = ["hearts", "spades", "clubs", "diamonds"];

    // function pickCard(x): any {
    //   // Check to see if we're working with an object/array
    //   // if so, they gave us the deck and we'll pick the card
    //   if (typeof x == "object") {
    //     let pickedCard = Math.floor(Math.random() * x.length);
    //     return pickedCard;
    //   }
    //   // Otherwise just let them pick the card
    //   else if (typeof x == "number") {
    //     let pickedSuit = Math.floor(x / 13);
    //     return { suit: suits[pickedSuit], card: x % 13 };
    //   }
    // }

    // let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    // let pickedCard2 = myDeck[pickCard(myDeck)];
    // alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

    // let pickedCard3 = pickCard(15);
    // alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);
    // let suits = ["hearts", "spades", "clubs", "diamonds"];
    // function pickCard(x: { suit: string; card: number; }[]): number;
    // function pickCard(x: number): { suit: string; card: number; };
    // function pickCard(x): any {
    //   // Check to see if we're working with an object/array
    //   // if so, they gave us the deck and we'll pick the card
    //   if (typeof x == "object") {
    //     let pickedCard = Math.floor(Math.random() * x.length);
    //     return pickedCard;
    //   }
    //   // Otherwise just let them pick the card
    //   else if (typeof x == "number") {
    //     let pickedSuit = Math.floor(x / 13);
    //     return { suit: suits[pickedSuit], card: x % 13 };
    //   }
    // }

    // let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    // let pickedCard1 = myDeck[pickCard(myDeck)];
    // alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    // let pickedCard2 = pickCard(15);
    // alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


    console.log('%c --------------------函数--------------------', 'color:red;');
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>