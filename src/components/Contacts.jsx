export default function ContactSection() {
    return (
        <div className="bg-gray-900 bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)' }}>
            <div className="container mx-auto py-16 px-8">
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-2xl text-gray-200 p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                        {/* Left Side - Contact Form */}
                        <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6 animate-pulse">Contact Us</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-105"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-105"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-105"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button className="bg-cyan-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-cyan-600 hover:scale-110 transition-transform duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Google Map */}
                        <div className="md:w-1/2 md:pl-8 animate-fade-in">
                            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094003!2d144.95592331531905!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c84cdd5f80b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1617268144152!5m2!1sen!2sau"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
