import { useState } from "react";
import './Country.css'

export default function Country() {
  const [countryName, setCountryName] = useState("");
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCountry = async () => {
    if (!countryName.trim()) {
      setError("Please enter a country name");
      return;
    }

    setLoading(true);
    setError("");
    setCountry(null);

    try {
      console.log("Fetching country data from REST Countries API...");
      
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error("Country not found");
      }

      const data = await response.json();
      
      console.log("Country data received:", data);
      
      
      if (data && data[0]) {
        setCountry(data[0]);
        setError("");
      } else {
        throw new Error("No country data found");
      }
      
    } catch (err) {
      console.error("Error details:", err);
      setError(err.message || "Failed to fetch country data");
      setCountry(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountry();
  };

 
  const formatNumber = (num) => {
    return num?.toLocaleString() || "N/A";
  };

 
  const getNativeName = (nativeNames) => {
    if (!nativeNames) return "N/A";
    const firstKey = Object.keys(nativeNames)[0];
    return nativeNames[firstKey]?.common || "N/A";
  };


  const getCurrencies = (currencies) => {
    if (!currencies) return "N/A";
    return Object.values(currencies)
      .map(curr => `${curr.name} (${curr.symbol})`)
      .join(", ");
  };

  
  const getLanguages = (languages) => {
    if (!languages) return "N/A";
    return Object.values(languages).join(", ");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="country-container">
        
        <div className="country-header">
          <h2 className="country-title">Explore Corner</h2>
          <p className="country-subtitle">
            Discover information about countries around the world
          </p>
        </div>

       
        <form onSubmit={handleSubmit} className="country-search">
          <div className="search-box">
            <input
              type="text"
              className="country-input"
              placeholder="Enter country name (e.g., Japan, France, Brazil)..."
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
            />
            <button type="submit" className="country-btn" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

     
        {error && (
          <div className="country-error">
            <p>⚠️ {error}</p>
          </div>
        )}

        
        {country && (
          <div className="country-display">
            
          
            <div className="country-main-card">
              
              
              <div className="country-header-section">
                <div className="country-flag-box">
                  <img 
                    src={country.flags.png} 
                    alt={`Flag of ${country.name.common}`}
                    className="country-flag"
                  />
                </div>
                
                <div className="country-basic-info">
                  <h3 className="country-name">{country.name.common}</h3>
                  <p className="country-official-name">{country.name.official}</p>
                  <div className="country-region-badge">
                    <span>{country.region}</span>
                    {country.subregion && <span className="subregion">• {country.subregion}</span>}
                  </div>
                </div>
              </div>

              
              {country.coatOfArms?.png && (
                <div className="coat-of-arms-box">
                  <img 
                    src={country.coatOfArms.png} 
                    alt="Coat of Arms"
                    className="coat-of-arms"
                  />
                </div>
              )}
            </div>

          
            <div className="country-details-grid">
              
              <div className="country-detail-card">
                <div className="detail-icon">🏛️</div>
                <div className="detail-content">
                  <div className="detail-label">Capital</div>
                  <div className="detail-value">{country.capital?.[0] || "N/A"}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">👥</div>
                <div className="detail-content">
                  <div className="detail-label">Population</div>
                  <div className="detail-value">{formatNumber(country.population)}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">📏</div>
                <div className="detail-content">
                  <div className="detail-label">Area</div>
                  <div className="detail-value">{formatNumber(country.area)} km²</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🗣️</div>
                <div className="detail-content">
                  <div className="detail-label">Languages</div>
                  <div className="detail-value small-text">{getLanguages(country.languages)}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">💰</div>
                <div className="detail-content">
                  <div className="detail-label">Currency</div>
                  <div className="detail-value small-text">{getCurrencies(country.currencies)}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🌐</div>
                <div className="detail-content">
                  <div className="detail-label">Native Name</div>
                  <div className="detail-value">{getNativeName(country.name.nativeName)}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🌍</div>
                <div className="detail-content">
                  <div className="detail-label">Continents</div>
                  <div className="detail-value">{country.continents?.join(", ") || "N/A"}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🚗</div>
                <div className="detail-content">
                  <div className="detail-label">Driving Side</div>
                  <div className="detail-value">{country.car?.side || "N/A"}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <div className="detail-label">Calling Code</div>
                  <div className="detail-value">+{country.idd?.root}{country.idd?.suffixes?.[0] || ""}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🌐</div>
                <div className="detail-content">
                  <div className="detail-label">Domain</div>
                  <div className="detail-value">{country.tld?.[0] || "N/A"}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🕒</div>
                <div className="detail-content">
                  <div className="detail-label">Timezones</div>
                  <div className="detail-value small-text">{country.timezones?.[0] || "N/A"}</div>
                </div>
              </div>

              <div className="country-detail-card">
                <div className="detail-icon">🗺️</div>
                <div className="detail-content">
                  <div className="detail-label">Coordinates</div>
                  <div className="detail-value small-text">
                    {country.latlng?.[0]?.toFixed(2)}°, {country.latlng?.[1]?.toFixed(2)}°
                  </div>
                </div>
              </div>

            </div>

            
            {country.maps?.googleMaps && (
              <div className="country-map-link">
                <a 
                  href={country.maps.googleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-btn"
                >
                  🗺️ View on Google Maps
                </a>
              </div>
            )}

           
            <div className="api-badge-bottom">
              <span>✓ From REST Countries API</span>
            </div>

          </div>
        )}

        
        {!country && !loading && !error && (
          <div className="country-placeholder">
            <div className="placeholder-icon">🌍</div>
            <p>Enter a country name to explore</p>
          </div>
        )}

      </div>
    </div>
  );
}
