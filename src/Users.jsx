import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const userInformation = useLoaderData();

    const [users , setUsers] = useState(userInformation);

    function handleItemDelete(id){
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Deleted Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                const remainingUsers = users.filter(user => user._id !== id);
                fetch("http://localhost:5000/user")
                .then(res => res.json())
                .then(data => {
                    setUsers(data);
                })
                



            }
        })
    }


    return (
        <div>

            <h2 className='text-5xl text-pink-600'>Total Users Length:  {userInformation.length}</h2>


            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td></td>
                                <td>
                                    <button onClick={() => handleItemDelete(user._id)} className='btn'>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;