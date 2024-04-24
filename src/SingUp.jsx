import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const SingUp = () => {

    const {createUser} = useContext(AuthContext);

    function handleSingUp(e){
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userLogin = {email,password};
        console.log(userLogin);

        createUser(email,password)
        .then(result => {
            console.log(result.user);

            // new user has been created

            const createdAt = result.user?.metadata?.creationTime;


            const user = {email, createdAt: createdAt};
            fetch("http://localhost:5000/user", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)

            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" 
                            name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                            name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;