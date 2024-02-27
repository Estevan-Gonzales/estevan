import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import ProjectDetails from '../pages/ProjectDetails';

function Work({ projects }) {

    const dataToPass = { name: 'John Doe', age: 25 };

    console.log(dataToPass);
    return (
        <div>
            {projects.map((project) => (

            <div className="project" key={project.id}>
                <Link to={project.id}>
                    <img className="darken" src={project.image_url}></img>
                    <div className="project-caption">{project.name}</div>
                </Link>
            </div>

        ))};
        </div>
    )
}

export default Work;