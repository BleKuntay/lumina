import LuminaLogo from '../assets/LuminaLogo.png';
import MenuIcon from '../assets/svg/menu.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar flex flex-row items-center bg-secondary xl:px-10 shadow">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hidden md:block'>
                            <Link to="/">Link</Link>
                        </li>
                        <li>
                            <details>
                                <summary className='md:hidden'>
                                    <img src={MenuIcon} alt=""/>
                                </summary>
                                <ul className="bg-secondary rounded-t-none p-2">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/customize">Customize</Link></li>
                                    <li><Link to="/About">About Us</Link></li>
                                    <li><Link to="/products">Our Products</Link></li>
                                    <li><Link to="/testimonials">Testimonials</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <img src={LuminaLogo} alt="" className='w-20 '/>
                </div>
            </div>
        </>
    )
}

export default Navbar;
