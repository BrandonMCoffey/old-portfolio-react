import './App.css';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import Project from './Project';
import Filter from './Filter';
import ProjectWindow from './ProjectWindow';

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch('Projects.json'
    ).then(function(response){
      console.log(response);
      return response.json();
    }).then(function(myJson){
      console.log(myJson);
      setProjects(myJson.results);
      setFiltered(myJson.results.filter((project) => !(project.hidden)));
    });
  }

  const openProject = (id) => {
    setActiveProject(projects.find((project) => project.id === id));
  }
  const closeProject = () => {
    setActiveProject(null);
  }

  return (
    <div className="App">
      <Filter
        projects={projects}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <br />
      <motion.div layout className="projects">
        <AnimatePresence>
        {filtered.map(project => {
          return <Project key={project.id} project={project} openProject={openProject} />;
        })}
        </AnimatePresence>
      </motion.div>
      { activeProject === null ? null : <ProjectWindow activeProject={activeProject} closeMenu={closeProject} /> }
    </div>
  );
}

export default App;
