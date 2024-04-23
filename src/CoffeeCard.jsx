import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    function handleDelete(_id) {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}` , {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id != _id);
                            setCoffees(remaining);
                        }
                    })

            }


        });

    }

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className='h-[250px] w-[250px]' alt="Movie" /></figure>
            <div className="flex justify-between">
                <div className='flex flex-col justify-start items-start mt-14'>
                    <h2 className="card-title">Name : {name}</h2>
                    <h2 className="card-title">Quantity : {quantity}</h2>
                    <h2 className="card-title">Supplier : {supplier}</h2>
                </div>
                <div className="card-actions justify-end mt-14">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item">View</button>
                        <Link to={`updatedCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;