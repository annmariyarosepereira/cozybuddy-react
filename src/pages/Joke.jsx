import { useState, useEffect } from "react";
import './Joke.css'

export default function Joke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError("");
    setJoke(null);
    setShowPunchline(false);

    try {
      console.log("Fetching joke from API...");
      
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }

      const data = await response.json();
      
      console.log("Joke received:", data);
      
      
      
      setJoke(data);
      setError("");
      
    } catch (err) {
      console.error("Error details:", err);
      setError(`Failed to fetch joke: ${err.message}`);
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRevealPunchline = () => {
    setShowPunchline(true);
  };

  
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="joke-container">
        
        <div className="joke-header">
          <h2 className="joke-title">Moment of Joy</h2>
          <p className="joke-subtitle">
            A little humor to brighten your day
          </p>
        </div>

        
        {loading && (
          <div className="joke-loading">
            <div className="loading-spinner"></div>
            <p>Finding the perfect joke...</p>
          </div>
        )}

        
        {error && !loading && (
          <div className="joke-error">
            <p>⚠️ {error}</p>
            <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
              The joke API is not responding. Check your connection or try again.
            </p>
            <button onClick={fetchJoke} className="retry-btn">
              Try Again
            </button>
          </div>
        )}

        
        {joke && !loading && !error && (
          <div className="joke-display">
            
            <div className="joke-card">
              <div className="joke-icon">😂</div>
              
              
              <div className="joke-setup">
                <p className="setup-text">{joke.setup}</p>
              </div>

              
              {!showPunchline ? (
                <button 
                  onClick={handleRevealPunchline} 
                  className="reveal-btn"
                >
                  Show Punchline 👀
                </button>
              ) : (
                <div className="joke-punchline">
                  <div className="punchline-divider">
                    <span>💥</span>
                  </div>
                  <p className="punchline-text">{joke.punchline}</p>
                </div>
              )}

              
              <div className="joke-type-badge">
                <span>{joke.type}</span>
              </div>

              <div className="api-badge">
                <span>✓ From Official Joke API</span>
              </div>
            </div>

            <button onClick={fetchJoke} className="new-joke-btn" disabled={loading}>
              {loading ? "Loading..." : "Get Another Joke"}
            </button>

          </div>
        )}

        
        {!joke && !loading && !error && (
          <div className="joke-placeholder">
            <div className="placeholder-icon">🎭</div>
            <p>Loading a joke for you...</p>
          </div>
        )}

      </div>
    </div>
  );
}
