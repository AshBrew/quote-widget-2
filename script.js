// Array of quotes
const quotes = [
    { text: "Courage is found in unlikely places.", author: "J.R.R. Tolkien" },
    { text: "All we have to decide is what to do with the time that is given to us.", author: "J.R.R. Tolkien" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "You have been chosen, and you must therefore use such strength and heart and wits as you have.", author: "J.R.R. Tolkien" },
    { text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.", author: "J.R.R. Tolkien" },
    { text: "Short cuts make long delays.", author: "J.R.R. Tolkien" },
    { text: "Faithless is he that says farewell when the road darkens.", author: "J.R.R. Tolkien" },
    { text: "It's the job that's never started as takes longest to finish.", author: "J.R.R. Tolkien" },
    { text: "While there's life, there's hope!", author: "J.R.R. Tolkien" },
    { text: "There are some things that it is better to begin than to refuse, even though the end may be dark.", author: "J.R.R. Tolkien" },
    { text: "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair.", author: "J.R.R. Tolkien" },
    { text: "Though in all lands love is now mingled with grief, it grows perhaps the greater.", author: "J.R.R. Tolkien" },
    { text: "I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.", author: "J.R.R. Tolkien" },
    { text: "In the end the Shadow was only a small and passing thing: there was light and high beauty for ever beyond its reach.", author: "J.R.R. Tolkien" },
    { text: "The wise speak only of what they know.", author: "J.R.R. Tolkien" },
    { text: "The wide world is all bout you: you can fence yourselves in, but you cannot for ever fence it out.", author: "J.R.R. Tolkien" },
    { text: "Oft hope is born, when all is forlorn.", author: "J.R.R. Tolkien" },
    { text: "It is useless to meet revenge with revenge: it will heal nothing.", author: "J.R.R. Tolkien" },
    { text: "You certainly usually find something, if you look, but it is not always quite the something you were after.", author: "J.R.R. Tolkien" },
    { text: "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those live after may have clean earth to till.", author: "J.R.R. Tolkien" },
    { text: "His grief he will not forget; but it will not darken his heart, it will teach him wisdom.", author: "J.R.R. Tolkien" },
    { text: "Go back?...No good at all! Go sideways? Impossible! Go forward? Only thing to do! On we go!", author: "J.R.R. Tolkien" },
    { text: "Don't adventures ever have an end? I suppose not. Someone else always has to carry on the story.", author: "J.R.R. Tolkien" },
    { text: "There is nothing like looking if you want to find something.", author: "J.R.R. Tolkien" },
    { text: "It is not despair, for despair is only for those who see the end beyond all doubt. We do not.", author: "J.R.R. Tolkien" },
    { text: "I will not say: do not weep; for not all tears are an evil.", author: "J.R.R. Tolkien" },
    { text: "There is an unpleasant time just in front of you; but keep your heart up!", author: "J.R.R. Tolkien" },
    { text: "In sorrow we must go, but not in despair. Behold! We are not bound for ever to the circles of the world, and beyond them is more than memory.", author: "J.R.R. Tolkien" },
    { text: "Courage will now be your best defence against the storm that is at hand...", author: "J.R.R. Tolkien" },
    { text: "There is a lot more in him than you guess, and a deal more than he has any idea of himself.", author: "J.R.R. Tolkien" },
    { text: "You cannot always be torn in two. You will have to be one and whole, for many years. You have so much to enjoy and to be, and to do.", author: "J.R.R. Tolkien" },
    { text: "I will be a healer, and love all things that grow and are not barren.", author: "J.R.R. Tolkien" },
    { text: "And yet their wills did not yeild, and they struggled on.", author: "J.R.R. Tolkien" },
    { text: "All have their worth...and each contributes to the worth of others.", author: "J.R.R. Tolkien" },
    { text: "The sooner we're rid of it, the sooner to rest...", author: "J.R.R. Tolkien" },
    { text: "Maybe the paths that you each shall tread are already laid before your feet, though you do not see them.", author: "J.R.R. Tolkien" },
    { text: "Yet do not cast all hope away. Tomorrow is unknown.", author: "J.R.R. Tolkien" },
    { text: "A man that flies from his fear may find that he has only taken a short cut to meet it.", author: "J.R.R. Tolkien" },
    { text: "There is always hope.", author: "J.R.R. Tolkien" },
    { text: "In this hour, I do not believe that any darkness will endure.", author: "J.R.R. Tolkien" },
    { text: "Even the smallest person can change the course of the future.", author: "J.R.R. Tolkien" },
    { text: "Deeds will not be less valiant because they are unpraised.", author: "J.R.R. Tolkien" },
    { text: "The hasty stroke goes oft astray.", author: "J.R.R. Tolkien" },
    { text: "A single dream is more powerful than a thousand realities.", author: "J.R.R. Tolkien" },
    { text: "No half-heartedness and no worldly fear must turn us aside from following the light unflinchingly.", author: "J.R.R. Tolkien" },
    { text: "I will not walk backward in life.", author: "J.R.R. Tolkien" },
    { text: "There's some good in this world, and it's worth fighting for.", author: "J.R.R. Tolkien" },
    { text: "The greatest adventure is what lies ahead. Today and tomorrow are yet to be said. The chances, the changes are all yours to make. The mold of your life is in your hands to break.", author: "J.R.R. Tolkien" },
    { text: "How do you move on?... You move on when your heart finally understands that there is no turning back.", author: "J.R.R. Tolkien" },
    { text: "It is not hte strength of the body that counts, but the strength of the spirit.", author: "J.R.R. Tolkien" },
    { text: "You have to understand the good in things, to detect the real evil.", author: "J.R.R. Tolkien" },
    { text: "How could the world go back to the way it was when so much bad had happened? But in the end, it's only a passing thing, this shadow. Even darkness must pass.", author: "J.R.R. Tolkien" },
    { text: "In the end, it's only a passing thing, this shadow. Even darkness must pass.", author: "J.R.R. Tolkien" },
    { text: "You can only come to the morning through the shadows.", author: "J.R.R. Tolkien" },
    { text: "For you do not yet know the strengths of your hearts, and you cannot forsee what each may meet on the road.", author: "J.R.R. Tolkien" },
    { text: "For we put the thought of all that we love into all that we make.", author: "J.R.R. Tolkien" },
    { text: "Deep roots are not reached by the frost.", author: "J.R.R. Tolkien" },
    { text: "You aren't nearly through this adventure yet.", author: "J.R.R. Tolkien" },
    { text: "It must often be so, Sam, when things are in danger: some one has to give them up, lose them, so that others may keep them.", author: "J.R.R. Tolkien" },
    { text: "What does your heart tell you?", author: "J.R.R. Tolkien" },
    { text: "The road must be trod, but it will be very hard.", author: "J.R.R. Tolkien" },
    { text: "You have so much to enjoy and to be, and to do.", author: "J.R.R. Tolkien" },
    { text: "End? No, the journey doesn't end here. Death is just another path. One that we all must take.", author: "J.R.R. Tolkien" },
    { text: "Going on from there was the bravest thing he ever did.", author: "J.R.R. Tolkien" },
    { text: "It is no bad thing to celebrate a simple life.", author: "J.R.R. Tolkien" },
    { text: "Adventures are not all pony-rides in May-sunshine.", author: "J.R.R. Tolkien" },
    { text: "You are only quite a little fellow in a wide world after all!", author: "J.R.R. Tolkien" },
    { text: "For victory is victory, however small, nor is its worth only from what follows it.", author: "J.R.R. Tolkien" },
    { text: "Do not spoil the wonder with haste!", author: "J.R.R. Tolkien" },
    { text: "Even darkness must pass. A new day will come, and when the sun shines, it will shine out the clearer.", author: "J.R.R. Tolkien" },
    { text: "Who knows? Have patience. Go where you must go, and hope!", author: "J.R.R. Tolkien" },
    { text: "Evil cannot create anything new, they can only corrupt and ruin good forces have invented or made.", author: "J.R.R. Tolkien" },
    { text: "I wisely started with a map.", author: "J.R.R. Tolkien" },
    { text: "But if we stayed home and did nothing, doom would find us anyway, sooner or later.", author: "J.R.R. Tolkien" },
    { text: "Few can forsee whither their road will lead them, till they come to its end.", author: "J.R.R. Tolkien" },
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display a random quote when the page loads
function displayRandomQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
}

// Display a new random quote when the button is clicked
document.getElementById('new-quote-btn').addEventListener('click', displayRandomQuote);

// Call the function to show an initial quote
displayRandomQuote();
