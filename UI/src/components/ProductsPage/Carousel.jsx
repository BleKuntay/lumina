import ProductSample from '../../assets/ProductSample.png'
import SampleImage1 from '../../assets/SampleImage/1.png'
import SampleImage2 from '../../assets/SampleImage/2.png'

const Carousel = () => {
    return (
        <div className=''>
            <div className="carousel w-full rounded">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={ProductSample}
                        className="w-full opacity-100"/>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={SampleImage1}
                        className="w-full"/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={SampleImage2}
                        className="w-full"/>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-md aspect-square bg-extra2 border-none text-white">1</a>
                <a href="#item2" className="btn btn-md aspect-square bg-extra2 border-none text-white">2</a>
                <a href="#item3" className="btn btn-md aspect-square bg-extra2 border-none text-white">3</a>
            </div>
        </div>
    )
}

export default Carousel;