import {motion} from 'framer-motion';

function Project({ project, openProject}) {
    return (
        <motion.div
                layout        
                animate={{opacity:1}}
                initial={{opacity:0}}
                exit={{opacity:0}}
            >
                <button className="project-box" onClick={() => openProject(project.id)}>
                    <div className="project-large">
                        <img className="project-image" src={"Projects/" + project.img} alt="" />
                    </div>
                    <div className="project-small">
                        <p className="project-text">{project.name}</p>
                        <img className="project-icon" src={"Software/" + project.software[3] + ".png"} alt="" />
                        <img className="project-icon" src={"Software/" + project.software[2] + ".png"} alt="" />
                        <img className="project-icon" src={"Software/" + project.software[1] + ".png"} alt="" />
                        <img className="project-icon" src={"Software/" + project.software[0] + ".png"} alt="" />
                    </div>
                </button>
        </motion.div>
    )
}

export default Project;
