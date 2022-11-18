import { Grid } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css";
import React, { useState } from "react";
import logo from "../static/images/logo-login-register.png";

import {
  SlButton,
  SlCheckbox,
  SlInput,
  SlMenuItem,
  SlSelect,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import { setLogin } from "../services/login-api";


const productApi = require("../services/product-api")


const Login = ({ setAuthenticated, setFormRegister }) => {

  const location = useLocation()

  const [credentials, setCredentials] = useState([])
  const [errorFeedBack, setErrorFeedBack] = useState('')

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    setLogin(credentials).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken)
        setAuthenticated(true)
        navigate("/")
      }
    }).catch(function (error) {
      if (error.response.status === 400) {
        setErrorFeedBack(error.response.data.message)
      }
    })

    // navigate("/");
  }

  console.log(location)
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }



  return (
    <div className="container">

      <div className="row justify-content-center mt-5">
        <section className="col text-center" style={{ "cursor": "pointer" }} onClick={() => navigate('/')}>
          <img
            src={logo}
            alt='Logo'
            style={{ width: 150, aspectRatio: "auto" }}
          />
        </section>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <h1 style={{ marginBottom: 0 }}>LOGIN</h1>
          <p style={{ color: "black", fontWeight: "Bold", marginBottom: 10 }}>
            Not a member? <Link to='/register'>Sign up</Link>
          </p>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-sm-10 col-lg-8 col-xl-6 text-center">
          <form onSubmit={handleSubmit}>

            <div className="row justify-content-center w-100">
              <SlInput
                class='input-primary input-login col text-center'
                name='email'
                type='email'
                placeholder='Email'
                required
                size='medium'
                pill
                autocomplete='off'
                onSlFocus={() => setErrorFeedBack('')}
                onSlInput={(event) => handleChange(event)}
              ></SlInput>
            </div>

            <br />

            <div className="row justify-content-center w-100">
              <SlInput
                class='input-primary input-login col text-center'
                name='password'
                type='password'
                placeholder='Password'
                required
                toggle-password
                size='medium'
                pill
                autocomplete='off'
                onSlFocus={() => setErrorFeedBack('')}
                onSlInput={(event) => handleChange(event)}
              ></SlInput>
            </div>

            <br />
            <SlButton type='submit' size='medium' pill className='submit-btn input-login'>
              Login
            </SlButton>

            <p style={{ "color": "red" }}>
              {errorFeedBack}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
