import { useState } from "react";

function Admin({goBack}) {

    // Create a state instance and initialize it to an empty string
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        github_url: "",
        tech_stack: "",
        image_url: ""
    });

    // Async function that calls the Flask endpoint, sends and receives messages.
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Sends a POST request to Flask and store the response object.
        const response = await fetch("https://portfolioapp-u2v6.onrender.com/add-project", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        // Flask returns a status message and displays it on screen
        const result = await response.json();
        alert(result.message);

        // Function to reset the State 
        setFormData({
            title: "",
            description: "",
            github_url: "",
            tech_stack: "",
            image_url: ""
        });
    };

    return (
        <div className="container mt-5">
            <div className="mb-4 text-start">
              <button className="btn btn-outline-secondary" onClick={goBack}>← Back to Projects
              </button>
            </div>

            {/* Project Title Form */}

            <form className="card shadow p-4" onSubmit={handleSubmit}>
                <h2 className="mb-4">Add New Project</h2>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Project Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        value={formData.title}
                        onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                        required
                    />
                </div>

                {/* Project Description Form */}

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Project Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        className="form-control"
                        value={formData.description}
                        onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                        required
                    />
                </div>

                {/* Github Url Form */}

                <div className="mb-3">
                    <label htmlFor="github_url" className="form-label">GitHub URL:</label>
                    <input
                        type="text"
                        name="github_url"
                        id="github_url"
                        className="form-control"
                        value={formData.github_url}
                        onChange={(event) => setFormData({ ...formData, github_url: event.target.value })}
                        required
                    />
                </div>

                {/* Tech Stack */}

                <div className="mb-3">
                    <label htmlFor="tech_stack" className="form-label">Tech-Stack used:</label>
                    <input
                        type="text"
                        name="tech_stack"
                        id="tech_stack"
                        className="form-control"
                        value={formData.tech_stack}
                        onChange={(event) => setFormData({ ...formData, tech_stack: event.target.value })}
                        required
                    />
                </div>

                {/* Image Url */}

                <div className="mb-3">
                    <label htmlFor="image_url" className="form-label">Image URL:</label>
                    <input
                        type="text"
                        name="image_url"
                        id="image_url"
                        className="form-control"
                        value={formData.image_url}
                        onChange={(event) => setFormData({ ...formData, image_url: event.target.value })}
                        required
                    />
                </div>

                {/* Project Submission Button */}

                <div className="text-end">
                    <button className="btn btn-primary" type="submit">Save Project</button>
                </div>
            </form>
        </div>
    );
}

export default Admin;
