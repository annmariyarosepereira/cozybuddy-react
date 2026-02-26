import { Link } from "react-router-dom";
import './index.css'

export default function Footer() {
  return (
    <footer className="cozy-footer mt-5">

      <div className="container py-4">

        <div className="row text-center text-md-start">

         
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🧸 CozyBuddy</h5>
            <p>Your daily dose of cozy 🌼</p>
            <p className="small">
              A gentle space for useful info, small smiles,
              and everyday comfort.
            </p>
          </div>

        
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>APIs</li>
              <li>Contact</li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Made with 💜</h6>
            <p className="small">
              Designed to bring a little calm,
              comfort, and positivity to your day ✨
            </p>
          </div>

        </div>

        <hr />

        
        <div className="text-center small">
          © 2026 CozyBuddy — All rights reserved
        </div>

      </div>

    </footer>
  );
}