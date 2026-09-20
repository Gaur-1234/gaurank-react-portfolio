function Projects() {
    const projects = [
        {
            number: "01",
            title: "Scholar Hub",
            description:
                "An AI-powered career and resume analysis platform with user and admin dashboards, authentication, resume analysis, job recommendations and job tracking.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
            ],
            github: "https://github.com/Gaur-1234/scholarhub",
            live: "https://scholarhub-one.vercel.app/",
        },
        {
            number: "02",
            title: "ATS",
            description:
                "An Applicant Tracking System designed to organize and manage applicant and recruitment-related workflows through a web-based platform.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            github: "https://github.com/Gaur-1234/ATS",
            live: "https://ats-nine-flame.vercel.app/",
        },
        {
            number: "03",
            title: "Palworld",
            description:
                "A Palworld-inspired gaming website featuring an immersive interface, animated sections, gameplay-focused content and interactive web elements.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
            ],
            github: "https://github.com/Gaur-1234/Palworld-",
            live: "https://palworld-dun.vercel.app/",
        },
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="section-heading">
                <span>03</span>
                <p>PROJECTS</p>
            </div>

            <div className="projects-content">
                <div className="projects-title">
                    <h2>
                        Things I've
                        <span> built.</span>
                    </h2>

                    <p className="projects-intro">
                        A selection of projects where I have
                        applied my development and problem-solving
                        skills.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.number}
                        >
                            <div className="project-top">
                                <span className="project-number">
                                    {project.number}
                                </span>

                                <div className="project-actions">
                                    <a
                                        href={project.github}
                                        className="project-link"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${project.title} GitHub`}
                                    >
                                        GitHub ↗
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="project-link project-live"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.technologies.map(
                                    (technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;