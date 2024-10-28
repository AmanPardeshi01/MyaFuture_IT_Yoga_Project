import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsSubmitted(true);
    };

    return (
        <div
            className="container mx-auto px-5 md:px-10 lg:px-20 py-24 flex flex-col items-center bg-cover bg-center animate-fade-in rounded-xl"
            style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/12/31/16/06/yoga-4732209_960_720.jpg)' }}
        >
            <h1 className="italic text-4xl font-bold text-gray-800 pb-5 ">Get In Touch</h1>
            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:w-2/3 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mb-10 lg:mb-0">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pune+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    ></iframe>
                    <div className="bg-gray-900 relative flex flex-col lg:flex-row py-4 rounded shadow-md">
                        <div className="flex-1 px-4 mb-4 lg:mb-0">
                            <h2 className="font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1 text-sm">123 Main St, Pune, India</p>
                        </div>
                        <div className="flex-1 px-4">
                            <h2 className="font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:example@email.com" className="text-red-300 leading-relaxed text-sm">example@email.com</a>
                            <h2 className="font-semibold text-white tracking-widest text-xs mt-2">PHONE</h2>
                            <p className="leading-relaxed text-sm">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 p-10 rounded-lg shadow-md">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="text-white leading-relaxed mb-5">We'd love to hear from you! Reach out to us anytime.</p>
                    {isSubmitted ? (
                        <p className="text-green-400">Thank you for your message!</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800 rounded border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                    <p className="text-xs text-gray-400 mt-3">Feel free to reach out with any questions or concerns.</p>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;
