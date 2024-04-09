import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (res.status === 400 || !res) {
                window.alert('Invalid Credentials');
            } else {
                // Render buttons for lungs, brain, and heart after successful login
                window.alert('Login Successful');
                history.push('/ChooseOrgan');
                document.getElementById('login-form').style.display = 'none';
                document.getElementById('button-container').style.display = 'flex';
               // history.push('/ChooseOrgan');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="container my-5" style={{ backgroundColor: "white" }}>
                    <div className="col-6 shadow p-5 mx-auto" style={{ backgroundColor: 'white' }}>
                        <h1 className="display-6 fw-bolder mb-5">3D_VR Radiology</h1>
                        <form id="login-form" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;