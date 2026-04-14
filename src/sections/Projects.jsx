const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">


        <div className="project-card">
          <h3>Pixique Creation Website</h3>
          <p>
            A responsive business website developed during internship with
            modern UI and performance optimizations.
          </p>
          <p className="tech">
            <strong>Tech:</strong> HTML, CSS, JavaScript
          </p>
          <div className="project-links">
            <a href="https://pixiquecreations.com/" target="_blank">Live</a>
            {/* <a href="#" target="_blank">GitHub</a> */}
          </div>
        </div>
        {/* Project 1 */}
        <div className="project-card">
          <h3>Doctor Appointment Management System</h3>
          <p>
            A full-stack MERN application with role-based authentication for
            Admin, Doctor, and User. Includes appointment scheduling, approval
            workflows, and secure data handling.
          </p>
          <p className="tech">
            <strong>Tech:</strong> React, Node.js, Express, MongoDB, JWT, Multer
          </p>
          <div className="project-links">
            {/* <a href="#" target="_blank">Live Demo</a> */}
            <a href="https://github.com/swarupsalunke/MERN_Appointment_Management_System.git" target="_blank">GitHub</a>
          </div>
        </div>

        {/* Project 2 */}

        {/* Project 3 */}
        <div className="project-card">
          <h3>Clothes Shop Management system</h3>
          <p>
            Clothes Shop Management System is a MERN-based application designed to manage billing, product inventory, workers, attendance, and expenses for a retail clothing shop. It provides role-based access for admin and cashier, along with sales and attendance history for better shop management.
          </p>
          <p className="tech">
            <strong>Tech:</strong>React, Node.js, Express, MongoDB, JWT
          </p>
          <div className="project-links">
            {/* <a href="#" target="_blank">Live Demo</a> */}
            <a href="https://github.com/swarupsalunke/Clothes-Shop-Management-System-Frontend.git" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
