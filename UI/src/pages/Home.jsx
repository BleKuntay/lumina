import Navbar from "../partials/Navbar.jsx";
import Section from "../partials/HomePage/Section.jsx";
import Footer from "../partials/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import CsButton from "../components/CsButton.jsx";

const Home = () => {
    return (
        <div className='bg-primary min-h-screen text-black'>
            <Navbar />
            <Section />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home;