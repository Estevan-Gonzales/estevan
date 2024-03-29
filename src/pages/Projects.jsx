import '/Users/estevan/Desktop/estevan/src/index.css';
import Work from '../components/Project';

export default function Projects() {

    let projects = [
        {
            name: "Monopoly",
            id: "monopoly",
            image_url: "/images/monopoly.png"
        },
        {
            name: "The Elements",
            id: "elements",
            image_url: "/images/elements.png",
        },
        {
            name: "Halfs",
            id: "halfs",
            image_url: "/images/halfs.png",

        },
        {
            name: "TypeHype",
            id: "typehype",
            image_url: "/images/typehype.png",
        }
    ];
            
    return (

            <div className="outside-projects">
                <div className="projects-header">Projects</div>
                <Work projects={projects}/>
            </div>

    );

};
