function Experience() {
    const experiences = [
        {
            period: "2026",
            title: "Vasi Gateways Pvt. Ltd.",
            role: "Technology Intern — FinTech",
            description:
                "Worked with technology and payment-related workflows, POS operations, merchant onboarding and banking integration systems.",
        },
        {
            period: "2023 — 2027",
            title: "SRM Institute of Science and Technology",
            role: "B.Tech — Computer Science & Engineering",
            description:
                "Building foundations in software engineering, data structures, databases, networking, machine learning and web development.",
        },
    ];

    return (
        <section
            id="experience"
            className="section experience-section"
        >
            <div className="section-heading">
                <span>04</span>
                <p>EXPERIENCE</p>
            </div>

            <div className="experience-content">
                <div className="experience-title">
                    <h2>
                        My professional
                        <span> journey.</span>
                    </h2>
                </div>

                <div className="experience-list">
                    {experiences.map((experience) => (
                        <article
                            className="experience-item"
                            key={`${experience.period}-${experience.title}`}
                        >
                            <div className="experience-period">
                                {experience.period}
                            </div>

                            <div className="experience-details">
                                <h3>{experience.title}</h3>
                                <h4>{experience.role}</h4>
                                <p>{experience.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;