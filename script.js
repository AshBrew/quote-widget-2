document.getElementById('new-quote-btn').addEventListener('click', fetchQuote);

async function fetchQuote() {
    const quoteUrl = 'https://api.quotable.io/random'; // Public quote API

    try {
        const response = await fetch(quoteUrl);
        const data = await response.json();

        // Update the quote in the widget
        document.getElementById('quote-text').textContent = `"${data.content}"`;
        document.getElementById('quote-author').textContent = `- ${data.author}`;
    } catch (error) {
        document.getElementById('quote-text').textContent = '"Oops! Something went wrong."';
        document.getElementById('quote-author').textContent = '- Unknown';
    }
}

// Fetch initial quote on page load
fetchQuote();
