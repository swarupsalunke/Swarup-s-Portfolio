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
          </div>
        </div>

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
            <a href="https://github.com/swarupsalunke/MERN_Appointment_Management_System.git" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Clothes Shop Management System</h3>
          <p>
            Clothes Shop Management System is a MERN-based application designed
            to manage billing, product inventory, workers, attendance, and
            expenses for a retail clothing shop. It provides role-based access
            for admin and cashier, along with sales and attendance history.
          </p>
          <p className="tech">
            <strong>Tech:</strong> React, Node.js, Express, MongoDB, JWT
          </p>
          <div className="project-links">
            <a href="https://github.com/swarupsalunke/Clothes-Shop-Management-System-Frontend.git" target="_blank">GitHub</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
  <h3>Chat Application - ChatSphere</h3>
  <p>
    Built a full-stack real-time chat application using MERN Stack, Socket.IO,
    Firebase Cloud Messaging (FCM), Redux, and Cloudinary. Features include
    instant messaging, push notifications, online status tracking, media
    sharing, and responsive UI. Deployed using Vercel and Render with MongoDB
    Atlas as the database. 🚀
  </p>
  <p className="tech">
    <strong>Tech:</strong> React, Node.js, MongoDB
  </p>
  <div className="project-links">
    <a href="https://github.com/swarupsalunke/ChatSphere-application.git" target="_blank">GitHub</a>
    <a href="https://chat-sphere-application.vercel.app/" target="_blank">Live</a>
  </div>
</div>

      </div>
    </section>
  );
};

export default Projects;