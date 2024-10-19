import ViewIcon from '../../assets/svg/views.svg'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import StarIcon from '../../assets/svg/star.svg'

const ProductInfo = () => {
    return (
        <div className='flex flex-row w-full'>
            <div className='text-start w-[60%]'>
                <h1 className='text-3xl font-semibold'>Title</h1>
                <div className="text-sm text-extra2 opacity-50">
                    <h3>Item #1234</h3>
                    <h3>Currently in Stock</h3>
                </div>
                <h2 className='text-xl font-medium'>Rp 100.000</h2>

                <button className='bg-green-600 flex flex-row text-white gap-2 p-2 mt-2 rounded hover:bg-green-700 duration-300 font-medium'>
                    <img src={WhatsAppIcon} alt="" className=''/>Order Now
                </button>
            </div>
            <div className='w-[40%]'>
                <div className="flex flex-row gap-2">
                    <img src={ViewIcon} alt="" className='w-5 fill-extra2'/>
                    <span>100 views</span>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={StarIcon} alt="" className='w-5'/>
                    <span>4.8/5.0</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;