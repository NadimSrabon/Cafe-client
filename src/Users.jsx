import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const userInformation = useLoaderData();


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userInformation.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;