import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp_number: '',
        nailArtType: '',
        nailArtColor: '',
        quantity: 1,
        additionalNotes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = '6281260004960';

        const message = `Pre-Order Nail Art:
Name: ${formData.name}
WhatsApp Number: ${formData.whatsapp_number}
Nail Art Code: ${formData.nailArtType}
Nail Art Color: ${formData.nailArtColor}
Quantity: ${formData.quantity}
Additional Notes: ${formData.additionalNotes}`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className='bg-primary px-6 py-3 rounded-lg shadow-lg max-w-lg mx-auto'>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-lg font-semibold'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    placeholder='Enter your name'
                    required
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='whatsapp_number' className='block text-lg font-semibold'>
                    WhatsApp number
                </label>
                <input
                    type='text'
                    id='whatsapp_number'
                    name='whatsapp_number'
                    value={formData.whatsapp_number}
                    onChange={handleChange}
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    placeholder='Enter your WhatsApp number'
                    required
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='nailArtType' className='block text-lg font-semibold'>
                    Nail Art Code
                </label>
                <select
                    id='nailArtType'
                    name='nailArtType'
                    value={formData.nailArtType}
                    onChange={handleChange}
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    required
                >
                    <option value='' disabled>
                        Choose Nail Art Type
                    </option>
                    <option value='classic'>#1234</option>
                    <option value='french'>#4321</option>
                    <option value='custom'>Custom Design</option>
                </select>
            </div>

            <div className='mb-4'>
                <label htmlFor='nailArtColor' className='block text-lg font-semibold'>
                    Nail Art Color
                </label>
                <select
                    id='nailArtColor'
                    name='nailArtColor'
                    value={formData.nailArtColor}
                    onChange={handleChange}
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    required
                >
                    <option value='' disabled>
                        Choose Nail Art Color
                    </option>
                    <option value='yellow'>Yellow</option>
                    <option value='red'>Red</option>
                    <option value='custom_color'>Custom color</option>
                </select>
            </div>

            <div className='mb-4'>
                <label htmlFor='quantity' className='block text-lg font-semibold'>
                    Quantity
                </label>
                <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    value={formData.quantity}
                    onChange={handleChange}
                    min='1'
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    required
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='additionalNotes' className='block text-lg font-semibold'>
                    Additional Notes
                </label>
                <textarea
                    id='additionalNotes'
                    name='additionalNotes'
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows='4'
                    className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                    placeholder='Add any special requests or instructions'
                />
            </div>

            <button
                type='submit'
                className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300'
            >
                Submit Pre-Order
            </button>
        </form>
    );
};

export default Form;
