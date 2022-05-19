// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"]

function writeCards(array, event) {
    let cards = []
    for(let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        
    }
    return cards
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer = integer - 1;
    }
}