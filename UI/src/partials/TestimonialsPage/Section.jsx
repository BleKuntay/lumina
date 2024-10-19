import { useState } from 'react';

// Dummy data testimoni untuk sementara
const dummyTestimonials = [
    {
        id: 1,
        name: 'John Doe',
        message: 'Great nail art service! I loved the custom design.',
        date: '2024-01-01',
    },
    {
        id: 2,
        name: 'Jane Smith',
        message: 'Amazing quality and friendly staff!',
        date: '2024-01-05',
    },
];

const Section = () => {
    const [testimonials, setTestimonials] = useState(dummyTestimonials);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
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
        const newTestimonial = {
            id: testimonials.length + 1, // ID dummy
            name: formData.name,
            message: formData.message,
            date: new Date().toISOString().split('T')[0], // Format tanggal sederhana
        };
        setTestimonials([...testimonials, newTestimonial]);
        setFormData({ name: '', message: '' }); // Reset form
    };

    return (
        <div className='container mx-auto px-6 py-3'>

            {/* Form untuk membuat testimoni baru */}
            <form onSubmit={handleSubmit} className='bg-primary p-4 rounded-lg shadow-lg mb-6'>
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
                    <label htmlFor='message' className='block text-lg font-semibold'>
                        Testimonial
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows='4'
                        className='bg-gray-200 w-full px-3 py-2 border border-gray-300 rounded-lg'
                        placeholder='Write your testimonial'
                        required
                    />
                </div>

                <button
                    type='submit'
                    className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300'
                >
                    Submit Testimonial
                </button>
            </form>

            {/* Daftar testimoni */}
            <div className='space-y-4'>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='bg-white p-4 rounded-lg shadow'>
                        <p className='font-semibold text-lg'>{testimonial.name}</p>
                        <p className='text-gray-700'>{testimonial.message}</p>
                        <p className='text-sm text-gray-500'>Date: {testimonial.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;
