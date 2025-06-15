import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard";


function ProjectList() {
    // State variable project is an array of fetched projects
    // Function setProject updates it
    const [project, setProject] = useState([]);

    // useEffect runs the function inside once (componentMount)
    useEffect(() => {
        // Asynchronous function that fetches project data from Flask
        const fetchProjects = async () => {
            try {
                // Sends a get request to Flask and stores the response
                const response = await fetch('http://localhost:5000/get_projects');
                // Parses the response JSON and saves it to data
                const data = await response.json();
                console.log('Fetched projects:', data);
                // Updates the projects state with fetched data to be rendered
                setProject(data);
            } catch (error) {
                console.error('Error fetching projects:', error)
            }
        };
        // Calls the function once the data loads
        fetchProjects();
        // Empty array means the useEffect will only run once
    }, []);

    return (
  <div className="container mt-4">
    <div className="row">
      {project.map((prj, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <ProjectCard project={prj} />
        </div>
      ))}
    </div>
  </div>
);

}

export default ProjectList;