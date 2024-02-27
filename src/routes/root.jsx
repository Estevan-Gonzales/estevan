import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div className="outside">
      <div className="name">
        Estevan Gonzales
        <div className="subline">
          Data Analyst & Software Developer
        </div>
      </div>
      <div className="section">
        <div className="projects-link">
          <Link to="/Projects">
            Projects
          </Link>
        </div>
        <div className="contact-link">
          <Link to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
