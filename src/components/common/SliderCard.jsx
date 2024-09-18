/* eslint-disable react/prop-types */
export default function SliderCard({ data, productName }) {
    return (
        <div className="bg-gray-700 p-5 rounded-lg border border-gray-500 shadow-sm transition-all duration-300 hover:shadow-lg" style={{ width: '600px' }}>
            <img 
                className="w-full h-64 object-cover rounded-lg mb-4 filter transition-all duration-500" 
                src={data} 
                alt="Slide Image" 
            />
            <div className="text-gray-300">
                {/* Flex container to handle product name and button alignment */}
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-lg text-cyan-400">{productName}</h4>
                    <button className="bg-cyan-500 text-gray-100 px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-cyan-600">
                        Buy Now
                    </button>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <span className="text-sm text-gray-400">Limited Edition</span>
                </div>
            </div>
        </div>
    );
}
