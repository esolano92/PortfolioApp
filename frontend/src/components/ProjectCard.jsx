function ProjectCard({project}) {
    // Prop used for html 
    const {title, description, github_url, tech_stack, image_url} = project;

    const BASE_URL = "https://esolano92.github.io/PortfolioApp/images/";


    // Function to handle the github button
    const handleGithubBtn = () => {
        window.open(github_url, '_blank') // _blank opens in new tab
    };

    return (
        
        <div className="card h-100">
            <img 
            className="card-img-top"
            src={`${BASE_URL}{image_url}`}
            alt={title}/>
            
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">{title}</h4>
                <p className="card-text flex-grow-1">{description}</p>
                <div className="mb-3">
                    {tech_stack.split(',').map((tech, i) => (
                        <span key={i} className="badge bg-secondary me-1">
                            {tech.trim()}
                        </span>
                        ))}
                </div>

                <button className='btn btn-primary mt-auto' onClick={handleGithubBtn}>Github</button>
                </div>
        </div>
    );

};

export default ProjectCard;