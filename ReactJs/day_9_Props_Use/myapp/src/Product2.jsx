import React from 'react'

const Product2 = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">


                {/* Product 2 */}
                <div className="overflow-hidden rounded-lg border bg-white shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
                        alt="Classic Watch"
                        className="h-48 w-full object-cover"
                    />

                    <div className="p-4">
                        <h2 className="text-xl font-bold">Classic Watch</h2>
                        <p className="mt-2 text-gray-500">Accessories</p>
                        <p className="mt-3 text-xl font-semibold text-green-600">₹2,499</p>
                        <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            View Product
                        </button>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Product2