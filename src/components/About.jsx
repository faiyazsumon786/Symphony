export default function AboutSection() {
    return (
        <div className="container mx-auto py-12 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-xl text-gray-200">
            <div className="flex flex-col md:flex-row items-center animate-fadeIn">
                {/* Left Side - Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://via.placeholder.com/500x400"
                        alt="About Us"
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInLeft"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="md:w-1/2 md:pl-12 animate-fadeInRight">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
                        About Our Company
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        We are a forward-thinking software company, focused on creating innovative solutions for modern businesses. Our expertise in cutting-edge technology and design allows us to deliver products that are both functional and aesthetically pleasing.
                    </p>
                    <p className="text-lg text-gray-400 mb-6">
                        With a diverse team of experts, we work hard to stay ahead of the curve and provide our clients with the best possible solutions, ensuring their success in the digital world.
                    </p>
                    <button className="bg-cyan-500 text-white px-5 py-3 rounded-lg shadow-md transition-transform duration-300 hover:bg-cyan-600 hover:shadow-xl hover:scale-105">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
