import Form from "../partials/PreOrderPage/Form.jsx";
import Navbar from "../partials/Navbar.jsx";
import Footer from "../partials/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const PreOrder = () => {
    return (
        <div className='bg-primary min-h-screen text-extra2'>
            <Navbar />
            <h1 className='text-center bg-primary text-3xl font-semibold mt-3'>Pre Order</h1>
            <Form />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default PreOrder;