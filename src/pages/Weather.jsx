import { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "51780bede6b02742c188a1f8e3946f0e";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name 💛");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found 💛");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="weather-container">

        
        <div className="weather-header text-center">
          <h2 className="weather-title">🌦 Weather Buddy</h2>
          <p className="weather-subtitle">
            Check current weather for any city
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="weather-search">
          <div className="search-box">
            <input
              type="text"
              className="weather-input"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="weather-btn" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        
        {error && (
          <div className="weather-error text-center">
            <p>⚠️ {error}</p>
          </div>
        )}

        
        {weather && (
          <div className="weather-main-card text-center">

            <h3>{weather.name}, {weather.sys.country}</h3>

            <p className="weather-date">
              {new Date().toLocaleDateString()}
            </p>

            <img
              src={getWeatherIcon(weather.weather[0].icon)}
              alt={weather.weather[0].description}
              className="weather-icon"
            />

            <div className="weather-temp">
              {Math.round(weather.main.temp)}°C
            </div>

            <p className="weather-desc">
              {weather.weather[0].description}
            </p>

            <p className="weather-feels-like">
              Feels like {Math.round(weather.main.feels_like)}°C
            </p>

          </div>
        )}

        
        {!weather && !loading && !error && (
          <div className="weather-placeholder text-center">
            <p>Enter a city name to get started 🌼</p>
          </div>
        )}

      </div>
    </div>
  );
}