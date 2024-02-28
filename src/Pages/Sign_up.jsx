import React, { useState } from "react";
// import Input_Field from "../Components/Input_Field";
import { Custom_Button } from "../Components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firebase_app } from '../config/firebase-config/index.jsx'
import { Input } from "@mui/material";
const Signup = () => {
    const [data, setData] = useState({});

    const change_handle = (e) => {
        const { value, id } = e.target;

        setData({ ...data, [id]: value });
    };
    const navigate = useNavigate()

    const submit_handle = (e) => {
        e.preventDefault();

        // console.log(data)

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log('user', user)
                navigate('/Home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorMessage', errorMessage)
                // ..
            });
    };

    //   console.log(data);
    return (
        <div style={{ textAlign: 'center', }}  >
            <form
                onSubmit={submit_handle}
            >
                <div >
                    <h1>SIGNUP</h1>
                </div>
                <div style={{ padding: '10px' }}>
                    <Input
                        className="Inpousad"
                        id="first_name"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="First Name"

                    />
                </div>
                <div style={{ padding: '10px' }} >
                    <Input
                        id="last_name"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="Last Name"
                    />
                </div>

                <div style={{ padding: '10px' }}>
                    <Input
                        id="username"
                        type="text"
                        required={true}
                        onChange={change_handle}
                        placeholder="Username"
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <Input
                        id="phone_number"
                        type="number"
                        required={true}
                        onChange={change_handle}
                        placeholder="Phone Number"
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <Input
                        id="email"
                        type="email"
                        required={true}
                        onChange={change_handle}
                        placeholder="Email Address"
                    />
                </div>
                <div style={{ padding: '10px' }} >
                    <Input
                        id="password"
                        required={true}
                        onChange={change_handle}
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <div >
                    <Custom_Button type="submit">Signup</Custom_Button>
                </div>

                <div  >
                    <span>Already have account </span>
                    <Link to="/login">
                        Login now
                    </Link>
                </div>
            </form>
        </div>
    );
};

export { Signup };