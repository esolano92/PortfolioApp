import { useState } from "react";
import Welcome from "./components/Welcome";
import ProjectList from "./components/ProjectList";
import Admin from "./components/Admin";
import TechStack from "./components/TechStack";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="container mt-5">
      {!showAdmin ? ( <> <Welcome/> <ProjectList /> <TechStack/> </>) : (<Admin goBack={() => setShowAdmin(false)}/>)}

      <footer className="text-center mt-5 text-muted">
        <small onDoubleClick={() => setShowAdmin(true)}>
          © 2025 Epifanio Solano
        </small>
      </footer>
    </div>
  );
}

export default App;
