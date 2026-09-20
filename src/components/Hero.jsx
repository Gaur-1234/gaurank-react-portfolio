function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-label">HELLO, I'M</p>

                <h1>
                    GAURANK <span>VERMA</span>
                </h1>

                <h2>B.Tech Student & Software Developer</h2>

                <p className="hero-description">
                    I build responsive web applications and backend
                    systems using modern technologies while continuously
                    improving my development and problem-solving skills.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>

                    <a href="#contact" className="btn btn-secondary">
                        Let's Connect
                    </a>
                </div>

                <div className="hero-tech">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Express.js</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-image-ring">
                    <img
                        src="/profile.jpg"
                        alt="Gaurank Verma"
                    />
                </div>

                <div className="floating-card">
                    <strong>2027</strong>
                    <span>B.Tech CSE</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;