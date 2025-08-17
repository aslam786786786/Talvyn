// Careers.js
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/careers.css";
import ui from "../assets/ui.png";
import hacker from "../assets/hacker.png";
import web from "../assets/web.png";
import Arrow1 from "../assets/Arrow1.png";
import Arrow2 from "../assets/Arrow2.png";

const careersData = [
    {
        title: "Web Development",
        description:
            "We're a fast-growing tech startup redefining what's possible with software.",
        icon: web,
    },
    {
        title: "Cyber Security",
        description:
            "Protecting systems and data with cutting-edge security solutions.",
        icon: hacker,
    },
    {
        title: "UI & UX Designing",
        description:
            "Crafting beautiful and intuitive digital experiences.",
        icon: ui,
    },
    {
        title: "Backend Development",
        description:
            "Building scalable and robust server-side applications.",
        icon: web,

    },
    {
        title: "AI & Machine Learning",
        description:
            "Creating smarter systems with data-driven intelligence.",
        icon: web,
    },
    {
        title: "Mobile Development",
        description:
            "Developing sleek and high-performing mobile applications.",
        icon: web,
    },
];

const Careers = () => {
    return (
        <div className="careers-section">
            <div className="careers-header">
                <div className="careers-title">
                    <img src={Arrow1} alt="Arrow Icon" className="careers-icon" />
                    <h2>Career with Talvyn</h2>
                    <img src={Arrow2} alt="Arrow Icon" className="careers-icon" />
                </div>
                <p>
                    We’re a fast-growing tech startup redefining what’s possible with
                    software — and we’re looking for people who are ready to build, break,
                    and grow with us.
                </p>
            </div>

            <div className="careers-grid">
                {careersData.map((career, index) => (
                    <div className="career-card" key={index}>
                        <img src={career.icon} alt={career.title} />
                        <h3>{career.title}</h3>
                        <p>{career.description}</p>
                    </div>
                ))}
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <h5>Contact Us</h5>
                        <p><i className="bi bi-geo-alt-fill text-blue-600 text-2xl m-2"></i>No.546, Left cross road, CBE</p>
                        <p><i className="bi bi-envelope-fill text-red-500 text-2xl m-2"></i>Email: Aaron@gmail.com</p>
                        <p><i className="bi bi-telephone-fill text-green-600 text-2xl m-2"></i>Phone: 1234567890</p>
                    </div>
                    <div className="footer-right">
                        <h5>Join our Community</h5>
                        <div className="social-icons">
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter-x"></i>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Careers;
