import '/src/index.css';
import Work from '../components/Work';

export default function Projects() {

    let projects = [
        {
            name: "The Elements",
            id: "elements",
            image_url: "/images/elements.png"
        },
        {
            name: "Halfs",
            id: "halfs",
            image_url: "/images/halfs.png"
        },
        {
            name: "TypeHype",
            id: "typehype",
            image_url: "/images/typehype.png"
        }
    ];
            
    return (
        <div className="projects">
            <Work projects={projects}/>
        </div>
    );

}