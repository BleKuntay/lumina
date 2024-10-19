import CSIcon from '../assets/cs-icon.png';

const WhatsAppButton = () => {
    return (
        <a
            className='fixed bottom-5 right-5 z-50'
            href='#'>
            <img
                src={CSIcon}
                alt='CS'
                className='w-16 shadow-lg rounded-full bg-green-600 p-3'
                onClick={() => alert('Clicked')}
            />
        </a>
    )
}

export default WhatsAppButton;