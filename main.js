//Dice roller
function createDice(number) {
    const dotPositionMatrix = {
        1: [
            [50,50]
        ],
        2: [
            [20,20],
            [80,80]
        ],
        3: [
            [20,20],
            [50,50],
            [80,80]
        ],
        4: [
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5: [
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80]
        ],
        6:[
            [20,20],
            [20,80],
            [50,20],
            [50,80],
            [80,20],
            [80,80]
        ]
    }

    const dice = document.createElement("div");

    dice.classList.add("dice");
    dice.classList.add("pixel-corners");

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%")
        dot.style.setProperty("--left", dotPosition[1] + "%")
        dice.appendChild(dot)
    }

    return dice
}

function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";

    for (let i = 0; i < numberOfDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1)
        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }
}

let NUMBER_OF_DICE = 1
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");


btnRollDice.addEventListener("click", () =>{
    const interval = setInterval(() => {
        randomizeDice(diceContainer, NUMBER_OF_DICE);
    }, 50);

    setTimeout(() => clearInterval(interval), 1000)
});

function numberOfDice() {
    NUMBER_OF_DICE = document.getElementById("numberOfDice").value;
}

//Card roller

function randomizeCard() {
    const randomNumber = Math.floor((Math.random() * 13))
    const randomFigure = Math.floor((Math.random() * 4))

    const cards = document.querySelector(".cards");

    cards.src = "media/cards.png"
    cards.style.setProperty("--top", -randomFigure*95 + "px");
    cards.style.setProperty("--left", -randomNumber*71 + "px");
}


const btnRollCard = document.querySelector(".btn-roll-card");

btnRollCard.addEventListener("click", () =>{
    const interval = setInterval(() => {
        randomizeCard();
    }, 50);

    setTimeout(() => clearInterval(interval), 1000)
});
