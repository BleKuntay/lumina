import HomeImg from '../../assets/HomeImg.png';
import WhatsApp from '../../assets/Whatsapp.svg';
import {Link} from "react-router-dom";
import PreOrder from "../../pages/PreOrder.jsx";

const Section = () => {
    return (
        <section
            className='w-full flex flex-col items-center justify-center p-5 gap-5 text-extra2
                       xl:flex-row'>
            <div className='text-start'>
                <h1 className='text-4xl font-bold mb-5'>
                    Perfect Nails,<br/>Every Time
                </h1>
                <p className='xl:w-[80%]'>
                    Discover the freedom to transform your nails anytime, anywhere with Lumina Studio's premium
                    removable nail art.<br/>
                    Our customizable fake nails are designed to give you the flexibility to change styles as often as
                    you like, without the commitment.<br/>
                    Choose from a variety of designs, or create your own unique look to express
                    your style effortlessly.
                </p>
                <div className='w-full text-white text-lg mt-5'>
                    <Link to='/preorder' className='w-fit px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 duration-300 flex flex-row items-center gap-3 justify-start'>
                        Order Now
                    </Link>
                </div>
            </div>


            <div>
                <img
                    src={HomeImg}
                    alt=""
                    className='border-2 border-gray-500 border-opacity-25 rounded
                               xl:w-[75%]'
                />
            </div>
        </section>
    )
}

export default Section;