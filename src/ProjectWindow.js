import {motion} from 'framer-motion';

function ProjectWindow({ activeProject, closeMenu }){
    
    window.onclick = function(event) {
        var modal = document.getElementById("modal-background");
        var image = document.getElementById("modal-image");
        if (event.target === modal || event.target === image) {
            closeMenu();
        }
    }

    return (
        <div className="modal" id="modal-background">
            <motion.div animate={{y:32}} className="modal-content">
                <div className="modal-header">
                    <button className="modal-close" onClick={closeMenu}>&times;</button>
                    {activeProject.name}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="modal-label">{activeProject.header}</i>
                </div>
                <div className="modal-body">
                    <img className="modal-image" id="modal-image" src={"Projects/"+activeProject.img} alt="" />
                    {activeProject.description === "" ? null : <p>{activeProject.description}</p>}
                    {activeProject.artstation === "" ? null : <p><a href={"https://www.artstation.com/artwork/"+activeProject.artstation}>View breakdown on ArtStation</a></p>}
                    {activeProject.github === "" ? null : <p><a href={"https://github.com/BrandonMCoffey/"+activeProject.github}>View code on Github</a></p>}
                    {activeProject.website === "" ? null : <p><a href={activeProject.website}>View more details or Download</a></p>}
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectWindow;