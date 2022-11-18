import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Formregister.css";

import {
    SlButton,
    SlCheckbox,
    SlInput,
    SlMenuItem,
    SlSelect,
    SlTextarea,
    SlRadioGroup,
    SlRadio,
    SlAlert,
    SlIcon
} from "@shoelace-style/shoelace/dist/react";

const Formregister = ({ formRegisterRedux }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const primary = useRef(null);


    const [errorFeedBack, setErrorFeedBack] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        if (localStorage.getItem("userLogged") == "false") {
            navigate("/register", { state: location.pathname })
            return
        }
        primary.current.toast()
    }

    useEffect(() => {
        if (formRegisterRedux) {
            primary.current.toast()
        }
    }, [])






    const handleChange = () => {

    }

    return (
        <div className='container'>
            <div className='row justify-content-center mb-5'>
                <div className='col-lg-8'>
                    <Form className='p-sm-5 mt-5'>
                        <div className='p-lg-5'>
                            <div className='row'>
                                <div className='col-lg-1'></div>
                                <Title className='col-lg-10' >My Membership Details</Title>
                            </div>
                            <BodyForm className='row justify-content-center'>


                                <form onSubmit={handleSubmit} className='form-register col-lg-10'>

                                    <SlInput
                                        className='label-on-left '
                                        label='Club'
                                        name='club'
                                        type='club'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <div className='row w-100 align-items-center '>
                                        <SlRadioGroup label="Select an option" name="a" value="1" require className='form-radio-register align-items-center'>
                                            <div className='form-radio-label-register'>Sex*</div>

                                            <div className='row'>
                                                <div className='col-12 col-sm-6'>
                                                    <SlRadio className='form-radio-btn' value="1">Male</SlRadio>
                                                </div>
                                                <div className='col-12 col-sm-6'>
                                                    <SlRadio className='form-radio-btn' value="2">Female</SlRadio>
                                                </div>
                                            </div>
                                        </SlRadioGroup>
                                    </div>

                                    <br />


                                    <SlInput
                                        className='label-on-left'
                                        label='Surname'
                                        name='surname'
                                        type='surname'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <br />

                                    <SlInput
                                        className='label-on-left'
                                        label='Name'
                                        name='name'
                                        type='name'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <br />
                                    <SlInput
                                        className='label-on-left'
                                        label='Telephone'
                                        name='tel'
                                        type='tel'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <br />

                                    <SlInput
                                        className='label-on-left'
                                        label='Email'
                                        name='email'
                                        type='email'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <br />

                                    <br />
                                    <SlCheckbox
                                        className='conditions'
                                        label='Conditions'
                                        required>

                                        i have read the therms and conditions and accept them. I authorize the company the club selected in the form to contact me.
                                    </SlCheckbox>
                                    <br />
                                    <div className='row justify-content-center'>
                                        <SlButton type='submit' size='medium' pill className='submit-btn-register col-sm-12 text-wrap'>
                                            <div className='d-none d-sm-block'>
                                                YOU CAN REGISTER AND BENEFIT FROM A FREE DISCOVERY DAY
                                            </div>
                                            <div className='d-block d-sm-none'>
                                                REGISTER
                                            </div>
                                        </SlButton>
                                    </div>



                                    <p style={{ "color": "red" }}>
                                        {errorFeedBack}
                                    </p>
                                </form>

                            </BodyForm>
                        </div>
                    </Form>
                    <SlAlert ref={primary} variant="primary" duration="6000" closable>
                        <SlIcon slot="icon" name="info-circle" />
                        <strong>Your registration has been sent</strong>
                        <br />
                        Once your registration has been validated, you will receive a confirmation email.
                    </SlAlert>
                </div>
            </div>
        </div>
    )
}



const BodyForm = styled.div`

`

const Title = styled.h1`
text-decoration: underline red;
margin-bottom:3rem;
`

const Radio = styled.div`
width:100%;
display:flex;
justify-content:flex-sart;
`

const Form = styled.div`
padding:1rem;
width:100%;
border-radius:30px;
background-color:#EAEAEA;
justify-content:center;
`

export default Formregister