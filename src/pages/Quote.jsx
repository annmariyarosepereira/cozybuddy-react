import { useState, useEffect } from "react";
import './Quote.css'

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fallback quotes in case all APIs fail
  const fallbackQuotes = [
    {
      content: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      content: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      content: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      content: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      content: "In the end, we only regret the chances we didn't take.",
      author: "Lewis Carroll"
    },
    {
      content: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  const getRandomFallbackQuote = () => {
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  };

  const fetchQuote = async () => {
    setLoading(true);
    setError("");

    try {
      console.log("Fetching quote from API Ninjas...");
      
      // Try API Ninjas Quotes API
      const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
        headers: {
          'X-Api-Key': 'YOUR_API_KEY_HERE'  // Replace with your actual API key
        }
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      
      console.log("Quote received:", data);
      
      // API Ninjas response format:
      // [
      //   {
      //     "quote": "Quote text here",
      //     "author": "Author Name",
      //     "category": "inspirational"
      //   }
      // ]
      
      if (data && data[0]) {
        setQuote({
          content: data[0].quote,
          author: data[0].author,
          tags: [data[0].category]
        });
        setError("");
        setLoading(false);
        return;
      }
    } catch (err) {
      console.log("API failed, using fallback quote");
    }

    // If API fails, use a random fallback quote
    const fallback = getRandomFallbackQuote();
    setQuote({
      content: fallback.content,
      author: fallback.author,
      tags: ["inspiration", "motivation"]
    });
    setError("");
    setLoading(false);
  };

  // Fetch quote on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="quote-container">
        
        <div className="quote-header">
          <h2 className="quote-title">Daily Inspiration</h2>
          <p className="quote-subtitle">
            Words of wisdom to brighten your day
          </p>
        </div>

        {/* Loading State */}
        {loading && !quote && (
          <div className="quote-loading">
            <div className="loading-spinner"></div>
            <p>Loading inspiration...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="quote-error">
            <p>⚠️ {error}</p>
            <button onClick={fetchQuote} className="retry-btn">
              Try Again
            </button>
          </div>
        )}

        {/* Quote Display */}
        {quote && (
          <div className="quote-display">
            
            <div className="quote-card">
              <div className="quote-icon">💬</div>
              
              <div className="quote-content">
                <p className="quote-text">"{quote.content}"</p>
              </div>

              <div className="quote-author">
                <span className="author-dash">—</span>
                <span className="author-name">{quote.author}</span>
              </div>

              {quote.tags && quote.tags.length > 0 && (
                <div className="quote-tags">
                  {quote.tags.map((tag, index) => (
                    <span key={index} className="quote-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              
            </div>

            <button onClick={fetchQuote} className="new-quote-btn" disabled={loading}>
              {loading ? "Loading..." : "Get New Quote"}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
