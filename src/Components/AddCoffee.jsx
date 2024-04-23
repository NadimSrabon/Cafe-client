import React from 'react';

import Swal from 'sweetalert2'

const AddCoffee = () => {

    function handleAddCoffee(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);


        // send data to the server

        fetch("http://localhost:5000/coffee", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })

                }
            })
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleAddCoffee} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add New Coffee</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Name</label>
                            <input id="firstname" type="text" 
                            placeholder="name" name="name"className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Quantity</label>
                            <input id="lastname" type="text"
                            name="quantity" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Supplier</label>
                            <input id="email" type="text" 
                            name="supplier"placeholder="Supplier" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Taste</label>
                            <input id="address" type="text"
                            name='taste' placeholder="taste" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black
                            focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Category</label>
                            <input id="city" type="text" placeholder="Category"
                            name='category' className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black
                            focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Details</label>
                            <input id="state" name='details' type="text" placeholder="Details" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Photo</label>
                            <input id="zip" type="text"
                            name='photo' placeholder="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                    </div>
                </fieldset>
                <input className='btn btn-block bg-slate-200' type="submit" />
            </form>
        </section>
    );
};

export default AddCoffee;