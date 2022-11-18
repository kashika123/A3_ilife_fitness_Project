import { Grid } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../static/images/logo-login-register.png";
import { createAccount } from "../services/registerapi.js";
import {
  SlButton,
  SlCheckbox,
  SlInput,
  SlMenuItem,
  SlSelect,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";

const Login = ({ setAuthenticated, setFormRegister }) => {

  const location = useLocation()
  const navigate = useNavigate();

  function handleSubmit(event) {

    event.preventDefault();

    createAccount(credentials).then((res) => {
      if (res.status === 201) {
        localStorage.setItem("token", res.data.accessToken)
        setAuthenticated(true)

        if (location.state === "/form-register") {
          setFormRegister(true)
          navigate(-1)
        } else {
          navigate("/shopAll")
        }

      }
    }).catch(function (error) {
      if (error.response.status === 400) {
        setErrorFeedBack(error.response.data.message)

      }
    })
  }

  const [credentials, setCredentials] = useState([])
  const [errorFeedBack, setErrorFeedBack] = useState('')
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
          <h1 style={{ marginBottom: 0 }}>SIGN UP</h1>
          <p style={{ color: "black", fontWeight: "Bold", marginBottom: 10 }}>
            Already a member? <Link to='/login'>Log in</Link>
          </p>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-sm-10 col-lg-8 col-xl-6 text-center">
          <form onSubmit={handleSubmit}>
            <SlInput
              class='input-primary input-login'
              name='lastName'
              placeholder='Name'
              required
              size='medium'
              pill
              autocomplete='off'
              onSlFocus={() => setErrorFeedBack('')}
              onSlInput={(event) => handleChange(event)}

            ></SlInput>
            <br />
            <SlInput
              class='input-primary input-login'
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
            <br />
            <SlInput
              class='input-primary input-login'
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
            <br />
            <SlButton type='submit' size='medium' pill className='submit-btn input-login'>
              Sign Up
            </SlButton>
            <p style={{ "color": "red" }}>
              {errorFeedBack}
            </p>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Login;
