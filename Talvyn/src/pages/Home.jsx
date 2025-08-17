import Hero from '../components/Hero';
import About from '../components/About';
import OurTeam from '../components/OurTeam';
import Careers from '../components/Careers';
import useInView from '../hooks/useInView';
import '../styles/home.css';

export default function Home() {
    const [aboutRef, aboutVisible] = useInView({ threshold: 0.2 });
    const [teamRef, teamVisible] = useInView({ threshold: 0.2 });
    const [careersRef, careersVisible] = useInView({ threshold: 0.2 });

    return (
        <div>
            <section className="hero visible">
                <Hero />
            </section>
            <section ref={aboutRef} className={aboutVisible ? "visible" : ""}>
                <About />
            </section>  
            <section ref={teamRef} className={teamVisible ? "visible" : ""}>
                <OurTeam />
            </section>
            <section ref={careersRef} className={careersVisible ? "visible" : ""}>
                <Careers />
            </section>
        </div>
    );
}
