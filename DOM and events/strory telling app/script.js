const storyContainer = document.querySelector(".story-container");
const scaryBtn = document.getElementById('scary-btn');
const funnyBtn = document.getElementById('funny-btn');
const adventureStory = document.getElementById('adventure-btn');
const result = document.getElementById('result');

const storyObj = {
    scary: {
        story: `Lilly was home alone. It was just her and her dog Spot. At night, Spot always goes under the bed, so when Lilly was scared, Spot would lick her hand. She climbed to bed, hoping for a good's night sleep. She started to fall into dreams' hands, then she heard "Drip, drip, drip." She got up and looked in the bathroom. She checked the faucet, to see if it was dripping. It wasn't. She went back to bed, confused. Just before Lilly climbed into bed she placed her hand under the bed so Spot could lick it. He licked. She felt less scared. Then she heard it again. "Drip, drip, drip." She checked every faucet in the house. None were dripping. Even more confused, she placed her hand under the bed again. Spot licked it, reassuring her. She climbed back in bed. "Drip, drip, drip." She listened more closely and realized it was coming from the closet in her bedroom. Frowning, Lilly walked towards it. What could it be? She opened the door and saw.... her dog, hanging dead from the coat hanger. The blood dripping down was the sound she heard. Then on the bottom of the closet was a note written in blood.
                 "Humans can lick too."
                And that was the last thing Lilly ever saw.`,
        borderColor: "gold"
    },
    funny: {
        story: `Samson, a big black fat cat, lay across a mat pretending to be asleep with one eye looking right at the hole in the wall where five rats lived. The rats wanted to get away from the cat but were scared to make a move. When a man who entered the house dropped his hat on the floor, the rats knew that they had a chance to get away from the cat. All of them hid under the hat and started moving towards the open door. The cat spotted the hat moving and started walking towards it. But as luck would have it, a sudden gust of wind tipped the hat over, and the rats fell into it. The wind blew the hat into the pond where it floated. Samson was angry because he couldn't swim. That's how the rats escaped from the wrath of the big black fat cat..`,
        borderColor: "#f1be32"
    },
    adventure: {
        story: `The lights beat down on my neck. The sneakers squeak. The crowd roars. The clock ticks. The basketball hits the ground with a soft thud before it bounces back up to meet my hand again. I stare ahead at the line of defenders guarding the goal, hands in the air to block any attempts of my team making a basket. Player number twelve sprints toward me, crouching down as I continue to dribble in place. I glance at the scoreboard mounted high on the huge gymnasium's wall. 60-62, fourth quarter, thirty seconds on the clock. We're only down two points, now twenty-seven seconds left to go. It's now or nothing.
                The defender directly in front of me surveys my movements very carefully, waiting for me to make a mistake. Another second passes and I hear the coach screaming in his booming voice, "Find an open player, Michael!" I get distracted for a moment, but it was enough for number twelve to have a chance to reach for the basketball. My reflexes take over and I switch the ball to my opposite hand, dodging his steal with ease.
                I  take off dribbling down the court, faking out defenders, spinning, jumping, and sprinting. Sweat trickles down my bald head as I break through a line of players from the other team, the ten second countdown already beginning.
                "Ten! Nine! Eight!" the crowds on the bleachers chant. I feel everyone's attention directed on me, every eye watching and waiting. Time slows down as I reach the three point line. Quickly adjusting my feet I leap high in the air, muscles rippling, taking the shot. The orange basketball leaves my hands, hurtling toward the basket.
                "Four! Three! Two!"
                My feet reunite with the court floor once more.
                "One!"
                The loud buzzer rings throughout the air, everyone silent now in the gymnasium. They wait. The fate of this entire game rests on one shot. My shot. The ball lands on the rim of the basket before rolling around on the thin metal. My heart flutters as I realize it's not going to make it in the net. I close my brown eyes and turn away. Suddenly the entire room is rumbling with shouts and cheers and screaming. I reopen my eyes slowly, nervously and glance back at the goal. The basket ball falls through the net. It took me a second to realize that I had won for the team! My teammates swarm over to me, hugging and patting each other on the backs. A smile of victory flashes across my awed face. Cameras click. People scream with excitement. Reporters ramble on. Fans flood around us.
                This is what basketball's about. This is glory on the court.`,
        borderColor: "#acd157"
    }
};
const displayStory = ((genre) => {
    if (storyObj.hasOwnProperty(genre)) {
        result.textContent = storyObj[genre].story;
        storyContainer.style.borderColor = storyObj[genre].borderColor;

    }

})

scaryBtn.addEventListener('click', () => { displayStory("scary") });
funnyBtn.addEventListener('click', () => { displayStory("funny") });
adventureStory.addEventListener('click', () => { displayStory("adventure") });