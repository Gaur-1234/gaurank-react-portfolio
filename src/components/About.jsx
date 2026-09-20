function About() {
    return (
        <section id="about" className="section about-section">
            <div className="section-heading">
                <span>01</span>
                <p>ABOUT ME</p>
            </div>

            <div className="about-content">
                <div className="about-title">
                    <h2>
                        Building ideas into
                        <span> useful software.</span>
                    </h2>
                </div>

                <div className="about-text">
                    <p>
                        I'm Gaurank Verma, a B.Tech Computer Science
                        and Engineering student and aspiring Software
                        Developer.
                    </p>

                    <p>
                        My development experience includes frontend
                        development, backend systems, databases,
                        REST APIs and authentication. I enjoy
                        transforming ideas into functional and
                        responsive web applications.
                    </p>

                    <p>
                        I'm continuously working on improving my
                        programming, problem-solving and software
                        development skills through practical projects.
                    </p>

                    <a
                        href="/Gaurank Resume.pdf"
                        className="text-link"
                        download
                    >
                        Download Resume →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;