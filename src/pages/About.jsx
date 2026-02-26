export default function About() {
  return (
    <div className="container mt-5 mb-5">

      <div className="about-hero p-5">

        <h2 className="about-title">About CozyBuddy</h2>

        {/* INTRO */}
        <p className="about-intro">
          CozyBuddy is a thoughtfully designed web application that seamlessly 
          integrates essential daily tools with moments of inspiration. Acting as 
          your digital companion, it brings together practical information and 
          uplifting content to enhance your everyday experience.
        </p>

        {/* PURPOSE */}
        <div className="about-section">
          <h4 className="section-title">Our Purpose</h4>
          <p className="section-text">
            We've curated a collection of practical tools and inspiring content 
            in one elegant space, eliminating the need to navigate multiple platforms. 
            Whether you're checking the weather, seeking motivation, or simply taking 
            a moment to unwind, CozyBuddy streamlines your daily routine with grace 
            and efficiency.
          </p>
        </div>

        {/* API SECTION */}
        <div className="about-section">
          <h4 className="section-title">Integrated Services</h4>
          
          <div className="api-grid">
            <div className="api-item">
              <div className="api-icon">🌦</div>
              <div className="api-content">
                <h5>Weather Intelligence</h5>
                <p>Real-time meteorological data for informed daily planning</p>
              </div>
            </div>

            <div className="api-item">
              <div className="api-icon">💬</div>
              <div className="api-content">
                <h5>Daily Inspiration</h5>
                <p>Curated quotes to nurture a positive and mindful perspective</p>
              </div>
            </div>

            <div className="api-item">
              <div className="api-icon">😊</div>
              <div className="api-content">
                <h5>Moment of Joy</h5>
                <p>Lighthearted content to brighten your day</p>
              </div>
            </div>

            <div className="api-item">
              <div className="api-icon">🌍</div>
              <div className="api-content">
                <h5>Global Insights</h5>
                <p>Comprehensive information about countries worldwide</p>
              </div>
            </div>

            <div className="api-item">
              <div className="api-icon">🗓</div>
              <div className="api-content">
                <h5>Time & Events</h5>
                <p>Stay synchronized with current time and important holidays</p>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="about-section">
          <h4 className="section-title">Technical Foundation</h4>
          
          <div className="tech-list">
            <div className="tech-item">
              <span className="tech-badge">React</span>
              <span className="tech-desc">Modern component-based architecture</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">React Router</span>
              <span className="tech-desc">Seamless single-page navigation</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">REST APIs</span>
              <span className="tech-desc">Dynamic, real-time data integration</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">Responsive Design</span>
              <span className="tech-desc">Optimized for all devices</span>
            </div>
          </div>
        </div>

        {/* CLOSING */}
        <div className="about-closing">
          <p>
            CozyBuddy represents our commitment to creating a refined digital environment 
            where functionality meets tranquility, transforming routine moments into 
            meaningful experiences.
          </p>
        </div>

      </div>

    </div>
  );
}
