import Navbar from "../partials/Navbar.jsx";
import Section from "../partials/ProductsPage/Section.jsx";
import Footer from "../partials/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const Products = () => {
    return (
        <div className='bg-primary min-h-screen text-extra2'>
            <Navbar />
            <Section />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

// TODO: Views Feature

export default Products;