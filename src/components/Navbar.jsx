import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#c69fd5" }}
    >
      <div className="container">

        
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#2f2f2f" }}
        >
          🧸 CozyBuddy
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link cozy-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link cozy-link" to="/about">About</Link>
            </li>

            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle cozy-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                API
              </a>

              <ul className="dropdown-menu cozy-dropdown">

                <li>
                  <Link className="dropdown-item" to="/weather">
                    Weather Buddy
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/quote">
                    Kind Words
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/joke">
                    Smile Break
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/country">
                    Explore Corner
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/planner">
                    Day Planner
                  </Link>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link cozy-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}