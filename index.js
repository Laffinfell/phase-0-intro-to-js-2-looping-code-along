// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts =  ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    const messages = []
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        console.log(`Thank you, ${cards[i]}, for the wonderful 
        birthday gift!`);
    }
    return messages
}
writeCards(cards);

function countDown(integer) {
    let i = integer; 
    while (i > 0) {
        console.log(`${integer[i]}`); i--;
    }
}

countDown(10);