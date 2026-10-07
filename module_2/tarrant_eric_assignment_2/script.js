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
