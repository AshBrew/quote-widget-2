// Array of quotes
const quotes = [
    { text: "Courage is found in unlikely places.", author: "J.R.R. Tolkien" },
    { text: "All we have to decide is what to do with the time that is given to us.", author: "J.R.R. Tolkien" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "You have been chosen, and you must therefore use such strength and heart and wits as you have.", author: "J.R.R. Tolkien" },
    { text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.", author: "J.R.R. Tolkien" }
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
