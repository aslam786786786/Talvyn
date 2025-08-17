import "../styles/ourteam.css";
import Design from '../assets/Design.png';
import Growth from '../assets/Growth.png';
import Innovation from '../assets/Innovation.png';
import Security from '../assets/Security.png';
import Thalapathy1 from '../assets/Thalapathy1.jpg';
import Thalapathy2 from '../assets/Thalapathy2.jpg';

const OurTeam = () => {

    return (
        <div className="container-fluid main-section">
            <div className="row align-items-center m-5 sub-section">
                <div className="col-md-6 ourteam-col1">
                    <h2 className="ourteam-title">Meet our CEO and Team</h2>
                    <p className="ourteam-text">
                        Meet the people shaping the future of our company.
                        At the heart of our company is a team of dedicated leaders committed to innovation,
                        growth, and integrity.
                    </p>
                    <div className="ourteam-btns">
                        <button><img src={Security} alt="Security"></img>Security</button>
                        <button><img src={Growth} alt="Growth"></img>Growth</button>
                        <button><img src={Innovation} alt="Innovation"></img>Innovation</button>
                        <button><img src={Design} alt="Design"></img>Design Thinking</button>
                    </div>
                </div>
                <div className="col-md-6 text-center ourteam-col2">
                    <div className="team-images">
                        <div className="team-card active">
                            <img src={Thalapathy1} alt="Thalapathy1" />
                            <div className="team-info">
                                <h4>Aaron</h4>
                                <p>CEO and Founder</p>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src={Thalapathy2} alt="Thalapathy2" />
                            <div className="team-info">
                                <h4>John Doe</h4>
                                <p>Lead Developer</p>
                            </div>
                        </div>

                        <div className="team-card">
                            <img src={Thalapathy1} alt="Thalapathy1" />
                            <div className="team-info">
                                <h4>Jane Smith</h4>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;
