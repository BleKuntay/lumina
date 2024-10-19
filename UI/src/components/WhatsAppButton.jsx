import WhatsApp from '../assets/Whatsapp.svg';

const WhatsAppButton = () => {
    return (
        <a
            className='fixed bottom-5 right-5 z-50'
            href='#'>
            <img
                src={WhatsApp}
                alt='WhatsApp'
                className='w-14 h-14 shadow-lg bg-green-600 rounded-full p-2'
            />
        </a>
    )
}

export default WhatsAppButton;