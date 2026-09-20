function Skills() {
    const skills = [
        {
            name: "HTML5",
            category: "Frontend",
        },
        {
            name: "CSS3",
            category: "Frontend",
        },
        {
            name: "JavaScript",
            category: "Programming",
        },
        {
            name: "React.js",
            category: "Frontend",
        },
        {
            name: "Node.js",
            category: "Backend",
        },
        {
            name: "Express.js",
            category: "Backend",
        },
        {
            name: "MongoDB",
            category: "Database",
        },
        {
            name: "Git & GitHub",
            category: "Version Control",
        },
        {
            name: "REST API",
            category: "Backend",
        },
        {
            name: "JWT",
            category: "Authentication",
        },
        {
            name: "Data Structures & Algorithms",
            category: "Problem Solving",
        },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="section-heading">
                <span>02</span>
                <p>TECH STACK</p>
            </div>

            <div className="skills-content">
                <div className="skills-title">
                    <h2>
                        Technologies I
                        <span> work with.</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div
                            className="skill-card"
                            key={skill.name}
                        >
                            <h3>{skill.name}</h3>
                            <p>{skill.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;