__author__ = "Eric Tarrant"
__version__ = "1.0.0"

let currentState = "beginning";

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const restartButton = document.getElementById("restart-btn");

const story = {
    beginning: {
        text: "The player finds themselves stuck in a large building in the center of the city. There are 3 ways they could go. First way is Up the stairs. Second way is down the stairs. Third way is to stay where they're.",
        choices: [
            {
                text: "Player goes up the stairs",
                nextState: "upstairs"
            },
            {
                text: "Player goes down the stairs",
                nextState: "downstairs"
            },
            {
                text: "Player stays put",
                nextState: "stay"
            }
        ]
    },

    //Upstairs path
    "upstairs": {
        text: "The player starts to go up the stairs. It is a very long walk up, but something the player notices is that, there are no doors on the way up. There is only one big door at the top. Does the player go through the door or do they go back down?",
        choices: [
            {
                text: "Player goes through the door",
                nextState: "upstairs-door"
            },
            {
                text: "Player goes back down",
                nextState: "upstairs-down"
            }
        ]
    },

    "upstairs-door": {
        text: "The player goes through the door, they find themselves outside on the top of the building. They see a being sitting right in front of them. It is for sure an android. Talk to the android?",
        choices: [
            {
                text: "Player talks to the android, it offers help and escort you out of the city. You win.",
                nextState: "upstairs-win"
            },
            {
                text: "The player attacks the android, it dodges the attack and leaves. You are now stuck at the top of this building. You lose.",
                nextState: "upstairs-lose"
            }
        ]
    },

    "upstairs-down": {
        text: "The player goes down the stairs, they fall down the stairs and die. You lose.",
        choices: []
    },

    //Downstairs path
    "downstairs": {
        text: "The player goes downstairs and see an android. Do you run away or sneak around it?",
        choices: [
            {
                text: "Player runs away from the android",
                nextState: "downstairs-run"
            },
            {
                text: "Player sneaks around the android",
                nextState: "downstairs-sneak"
            }
        ]
    },

    "downstairs-sneak": {
        text: "You sneak around the android. This android most likely is not very smart, because you just crouched around it and it did not see you. Wow good job. You reach the bottom of the building, go outside or stay?",
        choices: [
            {
                text: "Player continues to go outside",
                nextState: "downstairs-run-outside"
            },
            {
                text: "Player decides to stay, the android finds you and turns you into an android. You lose.",
                nextState: "downstairs-sneak-stay"
            }
        ]
    },
    "downstairs-run": {
        text: "Player runs away, the android sees the player and runs after player. Luckily you find a place to hid. Do you continue hide or run away",
        choices: [
            {
                text: "Player runs away from the android",
                nextState: "downstairs-run-run"
            },
            {
                text: "The player decides to stay, the android finds you and turns you into an android. You lose.",
                nextState: "downstairs-hide"
            }
        ]
    },
    "downstairs-run-run": {
        text: "If you run away you reach the spot you start in. You neither win or lose.",
        choices: []
    },
    "downstairs-hide": {
        text: "If you stay the android finds you and turns you into an android, you lose.",
        choices: []
    },

    //Staying put path

    "stay": {
        text: "Player decides to stay... really dude? Continue to stay or go to bed?",
        choices: [
            {
                text: "Player goes to bed.",
                nextState: "stay-bed"
            },
            {
                text: "Player stays",
                nextState: "stay-stay"
            }
        ]
    },

    "stay-stay": {
        text: "Player stays again, the noise you heard earlier gets really loud but then it just goes away. You choose to stay again. You win I think?",
        choices: [
            {
                text: "Player stays",
                nextState: "stay-stay-stay"
            },
            {
                text: "Player leaves",
                nextState: "stay-leave"
            }
        ]
    },
    "stay-stay-stay": {
        text: "if you stay where you are nothing really changes, but you hear something in the distance. do you stay or leave?",
        choices: [
            {
                text: "Player stays",
                nextState: "stay-stay-stay"
            },
            {
                text: "Player leaves",
                nextState: "stay-leave"
            }
        ]
    },
    "stay-leave": {
        text: "Player deicides to leave but sadly gets attacked by an android and then turned into an android. You lose.",
        choices: []
    },

    "stay": {
        text: "Player decides to stay... really dude? Continue to stay or go to bed?",
        choices: [
            {
                text: "Player goes to bed.",
                nextState: "stay-bed"
            },
            {
                text: "Player stays",
                nextState: "stay-stay"
            }
        ]
    },
    "stay-bed": {
        text: "player goes to bed, they awake in a completely different location. It is some sort of forest. Do you stay where you are or walk further in the forest?",
        choices: [
            {
                text: "Player stays",
                nextState: "stay-bed-stay"
            },
            {
                text: "Player walks further",
                nextState: "stay-bed-walk"
            }
        ]
    },

    "stay-bed-walk": {
        text: "Player stays and does not go further into the forest. You then get teleported back to the building. You neither win or lose.",
        choices: []
    },
    "stay-bed-stay": {
        text: "Player walks into the forest, you begin to heard a loud bunch of sounds behind you. Its over 1000 androids running at you. Good luck out running them, you lose.",
        choices: []
    }
};


/**
 * Displays the story state.
 */
function renderQuestion() {

    const state = story[currentState];

    questionElement.textContent = state.text;

    answersElement.innerHTML = "";

    progressElement.textContent =
        `Current location: ${currentState}`;

    if (state.choices.length === 0) {

        const endingMessage = document.createElement("p");

        endingMessage.textContent =
            "Your adventure has reached an ending.";

        endingMessage.classList.add("ending");

        answersElement.appendChild(endingMessage);

        return;
    }

    state.choices.forEach(function (choice) {

        addAnswerButton(
            choice.text,
            choice.nextState
        );

    });
}


/**
 * Creates a button for a choice.
 */
function addAnswerButton(text, nextState) {

    const button = document.createElement("button");

    button.textContent = text;

    button.type = "button";

    button.addEventListener("click", function () {

        currentState = nextState;

        renderQuestion();

    });

    answersElement.appendChild(button);
}


/**
 * Restarts the game.
 */
function restartGame() {

    currentState = "start";

    renderQuestion();
}


restartButton.addEventListener(
    "click",
    restartGame
);


renderQuestion(); 