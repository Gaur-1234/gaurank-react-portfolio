import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <a
                href="#home"
                className="nav-logo"
                onClick={closeMenu}
            >
                <div className="nav-logo-image">
                    <img
                        src="/profile.jpg"
                        alt="Gaurank Verma"
                    />
                </div>

                <div className="nav-logo-text">
                    <h3>GAURANK VERMA</h3>
                    <span>SOFTWARE DEVELOPER</span>
                </div>
            </a>

            <nav
                className={`nav-links ${
                    menuOpen ? "nav-links-open" : ""
                }`}
            >
                <a href="#about" onClick={closeMenu}>
                    About
                </a>

                <a href="#skills" onClick={closeMenu}>
                    Skills
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>

                <a href="#experience" onClick={closeMenu}>
                    Experience
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </nav>

            <div className="nav-actions">
                <a
                    href="/Gaurank Resume.pdf"
                    className="nav-resume"
                    download
                >
                    Resume
                </a>

                <button
                    className={`menu-toggle ${
                        menuOpen ? "menu-toggle-active" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;