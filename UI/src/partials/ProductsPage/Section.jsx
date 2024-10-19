import ProductSample from '../../assets/ProductSample.png'
import SampleImage1 from '../../assets/SampleImage/1.png'
import SampleImage2 from '../../assets/SampleImage/2.png'
import Carousel from "../../components/ProductsPage/Carousel.jsx";
import ProductInfo from "../../components/ProductsPage/ProductInfo.jsx";

const Section = () => {
    return (
        <section className="flex flex-col gap-5 p-5 text-center">
            <h1 className='text-4xl font-bold tracking-wide'>OUR PRODUCTS</h1>
            <div className="flex flex-col items-center justify-center bg-secondary p-3 rounded">
                <Carousel />
                <ProductInfo />
            </div>
            <div className="flex flex-col items-center justify-center bg-secondary p-3 rounded">
                <Carousel />
                <ProductInfo />
            </div>
        </section>
    )
}

export default Section;