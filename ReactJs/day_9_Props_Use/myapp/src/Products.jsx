import React from 'react'

const Products = (props) => {
    const{img,name,category,}=props
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                <div className="overflow-hidden rounded-lg border bg-white shadow-md">
                    <img src={img} alt="Headphones" className="h-48 w-full object-cover"/>
                    <div className="p-4">
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="mt-2 text-gray-500">{category}</p>
                        <p className="mt-3 text-xl font-semibold text-green-600">{props.price}</p>
                        <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">{props.btn}</button>
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default Products