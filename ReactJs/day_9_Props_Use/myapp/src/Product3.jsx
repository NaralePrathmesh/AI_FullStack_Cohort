import React from 'react'

const Product3 = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {/* Product 1 */}
                <div className="overflow-hidden rounded-lg border bg-white shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                        alt="Headphones"
                        className="h-48 w-full object-cover"
                    />

                    <div className="p-4">
                        <h2 className="text-xl font-bold">Wireless Headphones</h2>
                        <p className="mt-2 text-gray-500">Electronics</p>
                        <p className="mt-3 text-xl font-semibold text-green-600">₹1,999</p>
                        <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            View Product
                        </button>
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default Product3