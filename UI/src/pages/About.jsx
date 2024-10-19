import Navbar from "../partials/Navbar.jsx";
import Section from "../partials/AboutPage/Section.jsx";
import Footer from "../partials/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const About = () => {
    return (
        <div className='bg-primary text-extra2'>
            <Navbar />
            <Section />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default About;