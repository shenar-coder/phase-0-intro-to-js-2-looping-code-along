/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}
wrapGifts(gifts);

*/

//const cards = ["eva", "gaia", "caleb"];
//const events = "birthday"

//let myArray = writeCards(cards, events);

function writeCards(cards, events) {
    const eA = [];
    
 for (let i = 0; i < cards.length; i++) {   
//    console.log(`Thank you, ${cards[i]}, for the wonderful, ${events} gift!`);
    eA.push(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);
     
 }
 return eA;
};

function countDown (posInt) {
   
    while (posInt >= 0) {
    console.log(posInt--)
}}