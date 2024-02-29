import { Link } from 'react-router-dom';

import '../index.css'

export default function Root() {
  return (
    <div className="outside-main">
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
        <div className="data-sets-link">
          <Link to="/DataSets">
            Data Sets
          </Link>
        </div>
        <div className="contact-link">
          <Link to="/Contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
