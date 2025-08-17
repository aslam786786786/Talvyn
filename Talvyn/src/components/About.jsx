import "../styles/about.css";
import VisionImg from '../assets/VisionImg.jpg';
import MissionImg from '../assets/MissionImg.jpg';
import Arrow from '../assets/Arrow 1.png';

const About = () => {
    return (
        <div className="container about-section">
            {/* Header */}
            <div className="about-header text-center">
                <h1>About Talvyn</h1>
                <img src={Arrow} alt="Arrow Icon" className="about-icon" />
            </div>

            {/* Mission */}
            <div className="about-row">
                <div className="about-text-container">
                    <h2 className="about-title">Our Vision</h2>
                    <p className="about-text">
                        To redefine how businesses operate by becoming the most trusted SaaS provider worldwide
                        through innovation and efficiency.
                    </p>
                    <button className="show-more-btn">
                        Show more <span className="btn-icon">→</span>
                    </button>
                </div>
                <div className="about-img-container">
                    <img src={MissionImg} alt="Mission" className="about-img about-img1" />
                </div>
            </div>

            {/* Vision */}
            <div className="about-row reverse">
                <div className="about-img-container">
                    <img src={VisionImg} alt="Vision" className="about-img about-img2" />
                </div>
                <div className="about-text-container">
                    <h2 className="about-title">Our Mission</h2>
                    <p className="about-text">
                        To provide user-friendly, cloud-based solutions that help businesses streamline
                        operations, reduce costs, and scale effortlessly.
                    </p>
                    <button className="show-more-btn">
                        Show more <span className="btn-icon">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
