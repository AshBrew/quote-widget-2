// Array of quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "To be great is to be misunderstood.", author: "Ralph Waldo Emerson" }
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
