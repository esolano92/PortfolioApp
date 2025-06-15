function Welcome() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        
        {/* Profile Photo with Flip Effect */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div className="flip-card mx-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/images/profilelogo.jpg"
                  alt="Profile Front"
                  className="img-fluid rounded-circle shadow"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="/images/deckys.png"
                  alt="Profile Back"
                  className="img-fluid rounded-circle shadow"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="col-md-8">
          <h1 className="fw-bold">Hi, I’m Epifanio</h1>
          <h4 className="text-muted mb-3">Aspiring Software & Data Engineer</h4>
          <p className="lead">
            I'm a recent Computer Science graduate with a strong interest in building scalable web apps,
            solving real-world problems with data, and leveraging cloud & DevOps tools to streamline development.
            I love working across the stack and continuously learning new technologies to grow as an engineer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

