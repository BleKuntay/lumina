import Navbar from "../partials/Navbar.jsx";
import Footer from "../partials/Footer.jsx";
import Section from "../partials/TestimonialsPage/Section.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const Testimonials = () => {
    return (
        <div className='bg-primary min-h-screen text-extra2'>
            <Navbar />
            <h1 className='text-center bg-primary text-3xl font-semibold mt-3'>Testimonials</h1>
            <Section />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Testimonials;