import '../index.css'

function Work({ projects }) {
    return (
        <div>
            {projects.map((project) => (
            <div className="project">
                <img className="darken" src={project.image_url}></img>
                <div className="project-caption">{project.name}</div>
            </div>
        ))};
        </div>
    )
}

export default Work;