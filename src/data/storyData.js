// Library of stories and their content
const storyData = {
  "tortoise-hare": {
    title: "The Tortoise and the Hare",
    content: [
      {
        type: "story",
        text: "Once upon a time, there lived a tortoise and a hare who were neighbors in a beautiful meadow. The hare was very proud of how fast he could run and often teased the tortoise for being so slow."
      },
      {
        type: "question",
        question: "What time of day do you think this scene takes place?",
        options: [
          "Early morning with dew on the grass",
          "Midday with bright sunshine",
          "Evening as the sun is setting",
          "Night time under moonlight"
        ],
        correctAnswer: 1,
        explanation: "While not directly stated, the bright, active scene of animals in a meadow suggests midday with sunshine, the most natural time for animals to be active in the open."
      },
      {
        type: "story",
        text: "One day, tired of the hare's boasting, the tortoise challenged him to a race. The hare laughed at the idea but agreed, thinking it would be an easy win. All the animals of the forest gathered to watch this unusual competition."
      },
      {
        type: "question",
        question: "How many animals do you imagine gathered to watch the race?",
        options: [
          "Just a few close friends",
          "About a dozen animals",
          "A large crowd filling the meadow",
          "Only one or two curious onlookers"
        ],
        correctAnswer: 2,
        explanation: "The text mentions 'all the animals of the forest gathered,' suggesting a large crowd, making the event seem significant."
      },
      {
        type: "story",
        text: "The race began, and the hare darted ahead quickly. Seeing how far behind the tortoise was, he decided to take a nap under a shady tree beside the path. 'I'll have plenty of time to rest and still win this race,' he thought to himself."
      },
      {
        type: "question",
        question: "What kind of tree did the hare likely rest under?",
        options: [
          "A palm tree with large fronds",
          "A pine tree with needles",
          "An oak tree with broad leaves",
          "A cactus with spiny branches"
        ],
        correctAnswer: 2,
        explanation: "An oak tree with broad leaves would provide the best shade for a nap in a forest setting, while options like palm trees or cacti would be out of place in this environment."
      },
      {
        type: "story",
        text: "While the hare slept, the tortoise continued to move forward slowly but steadily. He never stopped, not even to rest. He just kept going, one step at a time, focused on the finish line ahead."
      },
      {
        type: "question",
        question: "What expression do you see on the tortoise's face?",
        options: [
          "A wide smile of confidence",
          "An angry, determined grimace",
          "A calm, focused expression",
          "A worried, anxious look"
        ],
        correctAnswer: 2,
        explanation: "Given the tortoise's steady, persistent approach described as 'slowly but steadily' and 'focused on the finish line,' a calm, focused expression best matches his character in this moment."
      },
      {
        type: "story",
        text: "Hours passed, and the hare was still sound asleep. By the time he woke up, he was shocked to see the tortoise approaching the finish line. The hare ran as fast as he could, but it was too late. The tortoise had won the race!"
      },
      {
        type: "question",
        question: "What color was the finish line ribbon?",
        options: [
          "Blue and white stripes",
          "Solid bright red",
          "Yellow and black checkered",
          "Green with silver sparkles"
        ],
        correctAnswer: 1,
        explanation: "While not mentioned directly, traditional finish lines are often red, making this the most likely option for children to visualize."
      },
      {
        type: "story",
        text: "The forest animals cheered loudly for the tortoise. The hare hung his head in shame, having learned an important lesson. The tortoise smiled and said, 'Slow and steady wins the race.' And from that day on, the hare never underestimated the tortoise again."
      },
      {
        type: "question",
        question: "What season of the year is this story taking place in?",
        options: [
          "Winter with snow on the ground",
          "Fall with colorful leaves",
          "Spring with flowers blooming",
          "Summer with warm sunshine"
        ],
        correctAnswer: 3,
        explanation: "The ability to nap comfortably outdoors, active animals, and a race taking place over hours suggests warm summer weather rather than the other seasons."
      },
      {
        type: "complete",
        text: "Congratulations! You've completed the story of The Tortoise and the Hare. This famous fable teaches us that consistency and perseverance are more important than natural talent when it comes to achieving our goals. Sometimes the slower, more deliberate approach wins in the end.",
        moral: "The moral of the story: Slow and steady wins the race."
      }
    ]
  },
  
  "lion-mouse": {
    title: "The Lion and the Mouse",
    content: [
      {
        type: "story",
        text: "In a dense jungle, a mighty lion was taking a nap after a long hunt. As he slept peacefully, a tiny mouse accidentally scurried across his face, waking him up with a start."
      },
      {
        type: "question",
        question: "What sounds could you hear in the jungle around the lion?",
        options: [
          "Just silence, as all animals were afraid of the lion",
          "Birds chirping and leaves rustling in the breeze",
          "Thunder and heavy rainfall",
          "Other lions roaring in the distance"
        ],
        correctAnswer: 1,
        explanation: "A jungle setting would naturally have ambient sounds like birds chirping and leaves rustling, creating a peaceful backdrop for the lion's nap."
      },
      {
        type: "story",
        text: "Furious at being disturbed, the lion caught the mouse between his massive paws. He raised his other paw, ready to crush the tiny creature. 'Please don't kill me!' squeaked the mouse. 'If you let me go, I promise to repay your kindness someday.'"
      },
      {
        type: "question",
        question: "What color was the mouse's fur?",
        options: [
          "Pure white",
          "Dark black",
          "Brown with gray patches",
          "Gray with a white belly"
        ],
        correctAnswer: 3,
        explanation: "While not directly stated, most wild mice have gray fur with lighter undersides, making this the most natural choice for a mouse in a jungle setting."
      },
      {
        type: "story",
        text: "The lion laughed at the idea that such a tiny creature could ever help him, but he was feeling merciful that day. 'Very well,' he said, and let the mouse go free. The mouse scurried away quickly, grateful for his life."
      },
      {
        type: "question",
        question: "How big was the lion compared to the mouse?",
        options: [
          "About 10 times bigger",
          "About 50 times bigger",
          "About 100 times bigger",
          "About 500 times bigger"
        ],
        correctAnswer: 2,
        explanation: "A typical lion is approximately 100 times the size of a mouse, making this the most realistic scale to visualize for their interaction."
      },
      {
        type: "story",
        text: "A few weeks later, the lion was hunting in the jungle when he stepped into a hunter's trap. A strong rope net fell from the trees, ensnaring him completely. The more he struggled, the tighter the ropes became. The lion roared in frustration and fear."
      },
      {
        type: "question",
        question: "What time of day was it when the lion got trapped?",
        options: [
          "Early morning as the sun was rising",
          "Middle of the night under moonlight",
          "Late afternoon as the sun was setting",
          "Middle of the day with bright sunshine"
        ],
        correctAnswer: 0,
        explanation: "Lions typically hunt in the early morning or evening. Since the story mentions the lion was hunting, early morning is the most natural time to visualize this scene."
      },
      {
        type: "story",
        text: "Hearing the lion's roars, the same little mouse came running. Remembering the lion's kindness, the mouse began gnawing on the thick ropes with his sharp teeth. After much effort, the mouse managed to create a hole in the net big enough for the lion to break free."
      },
      {
        type: "question",
        question: "How did the lion feel when he saw the mouse coming to help?",
        options: [
          "Angry that such a small creature thought it could help",
          "Amused at the mouse's foolish attempt",
          "Surprised and then hopeful",
          "Indifferent because he didn't recognize the mouse"
        ],
        correctAnswer: 2,
        explanation: "Given the situation, the lion would logically feel surprised to see the mouse again and then hopeful that help might be possible."
      },
      {
        type: "story",
        text: "Free from the trap, the lion looked down at the mouse with new respect. 'Thank you, little friend,' said the lion. 'I was wrong to laugh at you. Even the smallest creature can be a great friend.' From that day on, the lion and the mouse remained friends, proving that kindness is never wasted."
      },
      {
        type: "question",
        question: "What expression was on the lion's face as he thanked the mouse?",
        options: [
          "A fierce, intimidating scowl",
          "A gentle, grateful smile",
          "An embarrassed, awkward grimace",
          "A neutral, expressionless face"
        ],
        correctAnswer: 1,
        explanation: "When expressing gratitude and newfound respect, the lion would most naturally have a gentle, grateful expression rather than the other options."
      },
      {
        type: "complete",
        text: "Congratulations! You've completed the story of The Lion and the Mouse. This famous fable teaches us that kindness can come from unexpected places, and that helping others—even those who seem different from us—is always worthwhile.",
        moral: "The moral of the story: No act of kindness, no matter how small, is ever wasted."
      }
    ]
  },
  
  "boy-wolf": {
    title: "The Boy Who Cried Wolf",
    content: [
      {
        type: "story",
        text: "In a small village nestled among rolling hills, a young shepherd boy was responsible for watching over the village's flock of sheep. His job was to alert the villagers if a wolf approached the flock."
      },
      {
        type: "question",
        question: "What was the shepherd boy wearing?",
        options: [
          "A knight's armor with a helmet",
          "A simple tunic and sandals",
          "A formal suit and tie",
          "A superhero cape and mask"
        ],
        correctAnswer: 1,
        explanation: "While not directly stated, a shepherd boy in a traditional setting would most likely wear simple, practical clothing like a tunic and sandals, suitable for outdoor work."
      },
      {
        type: "story",
        text: "One day, the boy became bored watching the sheep. To amuse himself, he decided to play a trick on the villagers. He ran down the hill toward the village shouting, 'Wolf! Wolf! A wolf is chasing the sheep!'"
      },
      {
        type: "question",
        question: "How far was the village from the hillside where the boy watched the sheep?",
        options: [
          "Just a few steps away",
          "About half a mile down the hill",
          "On the next mountain, several miles away",
          "In another country entirely"
        ],
        correctAnswer: 1,
        explanation: "The story mentions the boy ran down the hill toward the village, suggesting a moderate distance - close enough to run to quickly but far enough that villagers couldn't see the hillside themselves."
      },
      {
        type: "story",
        text: "Hearing his cries, the villagers dropped their work and rushed up the hill to help the boy drive the wolf away. But when they arrived, they found no wolf. The boy laughed at the sight of their angry faces. 'I fooled you all!' he said."
      },
      {
        type: "question",
        question: "How many villagers came running to help?",
        options: [
          "Just one elderly person",
          "Two or three people",
          "A dozen or more people",
          "The entire village population"
        ],
        correctAnswer: 2,
        explanation: "The story mentions 'villagers' plural who 'dropped their work,' suggesting a significant number - likely a dozen or more - but not necessarily the entire village."
      },
      {
        type: "story",
        text: "A few days later, the boy played the same trick again. He cried out, 'Wolf! Wolf!' Once again, the villagers rushed up the hill to help him, only to find that it was another false alarm. The boy laughed even harder at their frustration."
      },
      {
        type: "question",
        question: "What time of day was it when the boy played this second trick?",
        options: [
          "Early morning as the village was waking up",
          "Middle of the night under a full moon",
          "Middle of the day during work hours",
          "Late evening as the sun was setting"
        ],
        correctAnswer: 2,
        explanation: "The story mentions the villagers 'dropped their work,' suggesting it was during daytime working hours, most likely the middle of the day."
      },
      {
        type: "story",
        text: "Then one evening, as the sun was setting, a real wolf approached the flock. The wolf had sharp teeth and hungry eyes. Terrified, the boy ran toward the village shouting, 'Wolf! Wolf! A real wolf is attacking the sheep! Help!'"
      },
      {
        type: "question",
        question: "What color was the wolf's fur?",
        options: [
          "Pure white like snow",
          "Jet black with no markings",
          "Gray with darker patches",
          "Brown with a white underbelly"
        ],
        correctAnswer: 2,
        explanation: "While not explicitly stated, wolves typically have gray fur with darker patches, which would be the most natural coloration to visualize in this setting."
      },
      {
        type: "story",
        text: "But this time, the villagers thought he was playing another trick. 'We won't be fooled again,' they said to one another. No one came to help. The wolf attacked the flock, and many sheep were lost."
      },
      {
        type: "question",
        question: "How did the villagers respond when they heard the boy's cries this time?",
        options: [
          "They ignored him completely",
          "They laughed and continued their activities",
          "They looked at each other skeptically and shook their heads",
          "They became angry and scolded the boy from a distance"
        ],
        correctAnswer: 2,
        explanation: "Based on the villagers saying 'We won't be fooled again' to one another, the most natural visualization is them looking at each other skeptically and shaking their heads in disbelief."
      },
      {
        type: "story",
        text: "When the boy returned to the village without his flock, he had tears in his eyes. 'There really was a wolf this time,' he sobbed. 'Why didn't you come?' An old man approached him and said gently, 'Nobody believes a liar, even when he tells the truth.'"
      },
      {
        type: "question",
        question: "What expression was on the old man's face as he spoke to the boy?",
        options: [
          "Fierce anger and disappointment",
          "Mocking laughter at the boy's misfortune",
          "Sympathy mixed with a teaching moment",
          "Complete indifference to the situation"
        ],
        correctAnswer: 2,
        explanation: "The story describes the old man speaking 'gently,' suggesting his expression would show sympathy for the boy while also conveying an important life lesson."
      },
      {
        type: "complete",
        text: "Congratulations! You've completed the story of The Boy Who Cried Wolf. This timeless fable teaches us the importance of honesty. When we lie, people stop believing us, even when we're telling the truth.",
        moral: "The moral of the story: A liar will not be believed, even when telling the truth."
      }
    ]
  },
  
  "ant-grasshopper": {
    title: "The Ant and the Grasshopper",
    content: [
      {
        type: "story",
        text: "During the warm days of summer, an ant was working hard, collecting food for the winter. Every day, she would gather grains and small pieces of food, carrying them back to her anthill one by one. The work was difficult, but the ant was determined."
      },
      {
        type: "question",
        question: "What was the weather like as the ant worked?",
        options: [
          "Rainy and stormy",
          "Cold and snowy",
          "Warm and sunny",
          "Windy and cloudy"
        ],
        correctAnswer: 2,
        explanation: "The story begins with 'the warm days of summer,' indicating that the weather was warm and sunny while the ant was working."
      },
      {
        type: "story",
        text: "Nearby, a grasshopper was enjoying the sunshine, hopping about and chirping happily without a care in the world. He spent his days playing music with his legs, dancing, and relaxing in the shade of tall grass blades. He never thought about storing food."
      },
      {
        type: "question",
        question: "What color was the grasshopper?",
        options: [
          "Bright red with black spots",
          "Vibrant blue with yellow stripes",
          "Green with brown markings",
          "Purple with orange dots"
        ],
        correctAnswer: 2,
        explanation: "While not explicitly stated, grasshoppers are typically green with brown markings, which would be the most natural coloration to visualize in this setting."
      },
      {
        type: "story",
        text: "One day, the grasshopper watched the ant struggling with a large grain of wheat. 'Why do you work so hard, little ant?' asked the grasshopper. 'Come sit with me and we can sing and dance together. Why waste such beautiful days with all this work?'"
      },
      {
        type: "question",
        question: "How big was the grain of wheat compared to the ant?",
        options: [
          "Smaller than the ant",
          "About the same size as the ant",
          "Twice the size of the ant",
          "Many times larger than the ant"
        ],
        correctAnswer: 3,
        explanation: "Since the ant was 'struggling' with the grain, it's reasonable to visualize the wheat grain as many times larger than the ant, which matches real-life proportions."
      },
      {
        type: "story",
        text: "'I am preparing for winter,' replied the ant wisely. 'When the cold weather comes and there is no food to be found, what will you do?' The grasshopper laughed. 'Winter is so far away! There's plenty of time to worry about that later. For now, let's enjoy the summer!'"
      },
      {
        type: "question",
        question: "What expression was on the ant's face during this conversation?",
        options: [
          "Anger and irritation",
          "Concern and seriousness",
          "Amusement and playfulness",
          "Fear and panic"
        ],
        correctAnswer: 1,
        explanation: "The ant replied 'wisely' and was focused on preparation, suggesting a concerned, serious expression rather than anger, amusement, or fear."
      },
      {
        type: "story",
        text: "The ant shook her head and continued working. All summer long, she prepared for the cold days ahead, while the grasshopper continued to play. Soon the leaves began to change color, and the air grew cooler. Autumn had arrived, and winter was not far behind."
      },
      {
        type: "question",
        question: "What did the landscape look like as autumn arrived?",
        options: [
          "Covered in fresh green growth",
          "Completely bare with no vegetation",
          "Blanketed in thick white snow",
          "Painted with red, orange, and yellow leaves"
        ],
        correctAnswer: 3,
        explanation: "The story mentions 'the leaves began to change color,' which is characteristic of autumn landscapes turning red, orange, and yellow."
      },
      {
        type: "story",
        text: "When winter came, the ground froze and snow covered the land. The grasshopper could find no food and had nothing stored away. Cold and hungry, he went to the ant's home. 'Please,' he begged, 'can you spare some food? I have nothing to eat and am starving.'"
      },
      {
        type: "question",
        question: "How did the grasshopper look when he came to the ant's door?",
        options: [
          "Happy and energetic as always",
          "Thin, shivering, and weak",
          "Angry and demanding",
          "Exactly the same as in summer"
        ],
        correctAnswer: 1,
        explanation: "The grasshopper is described as 'cold and hungry' and 'begged' for food, so the most accurate visualization would be him looking thin, shivering, and weak."
      },
      {
        type: "story",
        text: "The ant looked at the grasshopper and said, 'All summer I worked hard while you played and made fun of me. I warned you to prepare, but you wouldn't listen. I have just enough food to last my colony through winter. If I give some away, we might not have enough.' The grasshopper understood his mistake too late."
      },
      {
        type: "question",
        question: "Where was the ant's food stored?",
        options: [
          "In a large pile outside the anthill",
          "In a human's kitchen nearby",
          "In underground chambers within the anthill",
          "In a hollow tree trunk"
        ],
        correctAnswer: 2,
        explanation: "While not directly stated, ants naturally store food in underground chambers within their anthills, which would be the most realistic location to visualize."
      },
      {
        type: "complete",
        text: "Congratulations! You've completed the story of The Ant and the Grasshopper. This classic fable teaches us about the importance of hard work, planning ahead, and preparing for the future rather than just enjoying the present moment.",
        moral: "The moral of the story: It is wise to prepare today for the needs of tomorrow."
      }
    ]
  },
  
  "crow-pitcher": {
    title: "The Crow and the Pitcher",
    content: [
      {
        type: "story",
        text: "On a scorching hot day, a thirsty crow flew over the fields looking for water. After a long search, she spotted a pitcher on the ground. The crow flew down eagerly, hoping to find water inside."
      },
      {
        type: "question",
        question: "What did the landscape look like where the crow was flying?",
        options: [
          "Lush green forest with tall trees",
          "Snowy mountain peaks",
          "Dry, golden fields with few trees",
          "Dense, misty swampland"
        ],
        correctAnswer: 2,
        explanation: "The story describes 'a scorching hot day' and the crow flying 'over the fields,' suggesting a dry, open landscape with golden fields and few trees."
      },
      {
        type: "story",
        text: "When the crow reached the pitcher, she peeked inside and saw that there was indeed some water. But the water level was very low, near the bottom of the pitcher. The crow tried to reach the water with her beak, but the pitcher's neck was too narrow and deep."
      },
      {
        type: "question",
        question: "What color and material was the pitcher?",
        options: [
          "Clear glass with blue designs",
          "Plastic with bright red patterns",
          "Brown clay with a plain surface",
          "Shiny metal with gold accents"
        ],
        correctAnswer: 2,
        explanation: "While not explicitly stated, in the traditional setting of this fable, a pitcher would most likely be made of clay with a natural brown color."
      },
      {
        type: "story",
        text: "The crow was desperate for a drink of water, but she couldn't fit her head inside the pitcher. She tried tipping it over, but the pitcher was too heavy to move. She paced around it, trying to think of a solution to her problem."
      },
      {
        type: "question",
        question: "How long had the crow been searching for water?",
        options: [
          "Just a few minutes",
          "About half an hour",
          "Several hours",
          "Multiple days"
        ],
        correctAnswer: 2,
        explanation: "The story mentions 'after a long search' and describes the crow as 'desperate for a drink,' suggesting she had been searching for several hours, not just minutes."
      },
      {
        type: "story",
        text: "Suddenly, the crow had a clever idea. She noticed some small pebbles nearby. One by one, she began picking up the pebbles with her beak and dropping them into the pitcher. Each pebble that fell in raised the water level a tiny bit."
      },
      {
        type: "question",
        question: "What size were the pebbles the crow was using?",
        options: [
          "Tiny, like grains of sand",
          "Small, about the size of beans",
          "Medium, like golf balls",
          "Large, like tennis balls"
        ],
        correctAnswer: 1,
        explanation: "The pebbles would need to be small enough for the crow to pick up with her beak, but large enough to displace a noticeable amount of water - about the size of beans would be most realistic."
      },
      {
        type: "story",
        text: "The crow worked patiently, dropping pebble after pebble into the pitcher. It was slow work, but gradually the water level began to rise. She continued until at last the water had risen high enough for her to reach it with her beak."
      },
      {
        type: "question",
        question: "How many pebbles did the crow need to drop in the pitcher?",
        options: [
          "Just two or three",
          "About a dozen",
          "Several dozen",
          "Hundreds of pebbles"
        ],
        correctAnswer: 2,
        explanation: "Since the story mentions it was 'slow work' and the water rose 'gradually,' it would likely take several dozen pebbles to raise the water level significantly, not just a few or hundreds."
      },
      {
        type: "story",
        text: "Finally, the water was within reach. The crow dipped her beak into the pitcher and took a long, satisfying drink. Her creativity and perseverance had solved the problem. With her thirst quenched, she spread her wings and flew away, leaving the pitcher behind."
      },
      {
        type: "question",
        question: "How did the crow feel after getting the water?",
        options: [
          "Still frustrated because she was still thirsty",
          "Angry that it took so much effort",
          "Satisfied and refreshed",
          "Worried about finding more water later"
        ],
        correctAnswer: 2,
        explanation: "The story describes the drink as 'long' and 'satisfying' and mentions her thirst was 'quenched,' indicating she felt satisfied and refreshed afterward."
      },
      {
        type: "story",
        text: "Other animals who had been watching from a distance were amazed by the crow's intelligence. A rabbit who had seen everything hopped over to look at the pitcher. He was impressed by the clever solution. From that day on, the story of the smart crow spread through the forest."
      },
      {
        type: "question",
        question: "What time of day was it when the crow finally solved her problem?",
        options: [
          "Early morning as the sun was rising",
          "Late afternoon as the sun was setting",
          "Middle of the night under moonlight",
          "Middle of the day with bright sunshine"
        ],
        correctAnswer: 1,
        explanation: "Since the story began on 'a scorching hot day' and mentions that the crow worked for some time on her solution, late afternoon would be the most logical time when she finally solved the problem."
      },
      {
        type: "complete",
        text: "Congratulations! You've completed the story of The Crow and the Pitcher. This clever fable teaches us that using our intelligence and perseverance can help us solve difficult problems. Sometimes the simplest solutions are the most effective.",
        moral: "The moral of the story: Necessity is the mother of invention."
      }
    ]
  }
};

export default storyData;