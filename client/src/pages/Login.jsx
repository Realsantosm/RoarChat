import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
// import Login from './Login';
import Logo from '../assets/logo.svg';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {loginRoute} from "../utils/APIRoutes";

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    useEffect(() => {
      if(localStorage.getItem('chat-app-user')) {
        navigate('/');
      }
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(handleValidation()) {
            const { password, username } = values;
            const {data} = await axios.post(loginRoute, {
                username,
                password,
            });
            if(data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if(data.status === true) {
                localStorage.setItem('chat-app-user', JSON.stringify(data.user))
                navigate("/")
            } else {
                toast.error("Error setting avatar. Please try again", toastOptions);
            }
        };
    };

    const handleValidation = () => {
        const {password, username} = values;
        if(password === '') {
            toast.error("Password and Confirm password must be same.", toastOptions);
            return false;
        } else if(username.length === '') {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.value] : e.target.value });

    };
  return (
    <>
        <FormContainer>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="brand">
                    <img src={Logo} alt="Logo here" />
                    <h1>RoarKies</h1>
                </div>
                <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} min="3" />
                {/* <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} /> */}
                <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                {/* <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} /> */}
                <button type='submit'>Login</button> 
                <span>Don't have an account ? <Link to="/register">Register</Link></span>
            </form> 
        </FormContainer>
        <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: center;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #f55;
    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center; 
        img {
            height: 5rem;
        }
        h1{
            background: linear-gradient(to right, #f55, orange);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            font-size: 3rem;
            font-weight: bold;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #dc2626;
        border-radius: 2rem;
        padding: 3rem 5rem;
        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.2rem solid white;
            border-radius: 0.5rem;
            color: white;
            width: 100%;
            font-size: 1.5rem;
            ::placeholder {
                color: orangered;
                font-size: 1.5rem;                
              }
              &:focus {
                outline: none;
                border: 0.2rem solid #f55;
              }
        }
        button {
            background-color: #f55;
            padding: .6rem 0rem;
            border-radius: 0.5rem;
            border: none;
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            &:hover {
                background-color: red;
                color: white;
                transition: 0.2s easy;
                box-shadow: 3px 2px 3px white;
                cursor: pointer;

            }
        }
        span {
            color: white;
            text-transform: uppercase;
            text-align: center;
            a{
                color: black;
                font-weight: bolder;
                text-decoration: none;
                &:hover {
                    color: yellow;
                }
            }
        }
    }
`;
export default Login