export default function Home() {
  return (
    <div className="container mt-5">

      
      <div className="text-center p-5 mb-5 cozy-hero">
        <h1 className="fw-bold">🧸 CozyBuddy</h1>

        <p className="lead">
          Your daily dose of cozy
        </p>

        <p>
          A gentle space for useful info, small smiles,
          and everyday comfort
        </p>
      </div>

      
      <div className="row text-center">

        
        <div className="col-md-4 mb-4">
          <div className="card cozy-card h-100">
            <div className="card-body">
              <h5>🌦 Weather Buddy</h5>
              <p>Check current weather anytime.</p>
            </div>
          </div>
        </div>

        
        <div className="col-md-4 mb-4">
          <div className="card cozy-card h-100">
            <div className="card-body">
              <h5>💬 Kind Words</h5>
              <p>Get daily inspiration.</p>
            </div>
          </div>
        </div>

        
        <div className="col-md-4 mb-4">
          <div className="card cozy-card h-100">
            <div className="card-body">
              <h5>😂 Smile Break</h5>
              <p>Lighten your mood with jokes.</p>
            </div>
          </div>
        </div>

        
        <div className="col-md-6 mb-4">
          <div className="card cozy-card h-100">
            <div className="card-body">
              <h5>🌍 Explore Corner</h5>
              <p>
                Discover countries, capitals, and facts from around the world.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col-md-6 mb-4">
          <div className="card cozy-card h-100">
            <div className="card-body">
              <h5>🗓️ Day Planner</h5>
              <p>
                Stay organized with current time and upcoming holidays.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}