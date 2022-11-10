let obj1 = {
    id: 1,
    str: "Example Note"
}

let obj2 = {
    id: 2,
    str: "Example Note"
}

let arr1 = [obj1, obj2]

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].id == obj1.id) console.log("Hello " + i)
}

// let tempCards = cards.newNote;
// tempCards.unshift(cards.tempNote);
// setCard({ newNote: tempCards, tempNote: "" });

let tempCards = cards.newNote;
