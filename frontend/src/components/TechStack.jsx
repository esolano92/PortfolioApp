function TechStack() {
  const techLogos = [
    { src: "./images/python.jpg", alt: "Python" },
    { src: "./images/javascript.png", alt: "JavaScript" },
    { src: "./images/vite.svg", alt: "React" },
    { src: "./images/flask.png", alt: "Flask" },
    { src: "./images/postgres.png", alt: "PostgreSQL" },
    { src: "./images/docker.png", alt: "Docker" },
    { src: "./images/aws.png", alt: "AWS" },
    { src: "./images/googlecloud.png", alt: "Google Cloud" },


  ];

  return (
    <div className="container text-center my-5">
      <h4 className="fw-bold mb-4">Technologies I Work With</h4>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {techLogos.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            title={tech.alt}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
