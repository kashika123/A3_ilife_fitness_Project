import React, { useState, useRef } from 'react'
import thanks from '../static/images/thanks.jpg'
import muscle from '../static/images/muscle.jpg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import "../styles/Simulator.css";

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

const Simulator = ({ setBodySimulator }) => {

    const primary = useRef(null);

    const [formResult, setFormResult] = useState({})

    const [step, setStep] = useState(1)

    const navigate = useNavigate()

    const [errorFeedBack, setErrorFeedBack] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (step === 4) {
            navigate('/simulator_result')
            return
        }
        setStep(step + 1)
        setBodySimulator(formResult)
    }



    const handleChange = (e) => {
        setFormResult({ ...formResult, [e.target.name]: e.target.value })
    }

    switch (step) {
        case 1:

            return (
                <>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col'>
                                <h2 style={{ 'marginTop': '3rem' }} className='row justify-content-center'>Let get to know you </h2>
                            </div>
                            <form onSubmit={handleSubmit} className='form-register-simulator'>
                                <Form>
                                    <SlSelect
                                        label='1. What’s your gender?'
                                        className='label-on-top'
                                        name='gender'
                                        type='gender'
                                        required
                                        size='medium'
                                        pill
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlChange={(event) => handleChange(event)}
                                    >
                                        <SlMenuItem value="Male">Male</SlMenuItem>
                                        <SlMenuItem value="Female">Female</SlMenuItem>
                                        <SlMenuItem value="Other">Other</SlMenuItem>
                                    </SlSelect>

                                    <SlInput
                                        className='label-on-top'
                                        label='2.  What is your goal?'
                                        name='goal'
                                        type='goal'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlSelect
                                        label='3. What’s your body type ?'
                                        className='label-on-top'
                                        name='bodytype'
                                        type='bodytype'
                                        required
                                        size='medium'
                                        pill
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlChange={(event) => handleChange(event)}
                                    >
                                        <SlMenuItem value="Hourglass">Hourglass</SlMenuItem>
                                        <SlMenuItem value="Rectangle">Rectangle</SlMenuItem>
                                        <SlMenuItem value="Rounded">Rounded</SlMenuItem>
                                        <SlMenuItem value="Lightbulb">Lightbulb</SlMenuItem>
                                    </SlSelect>

                                    <SlSelect
                                        label='4. Which parts should we focus on ?'
                                        className='label-on-top'
                                        name='focuspart'
                                        type='focuspart'
                                        required
                                        size='medium'
                                        pill
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlChange={(event) => handleChange(event)}
                                    >
                                        <SlMenuItem value="Arms">Arms</SlMenuItem>
                                        <SlMenuItem value="Belly">Belly</SlMenuItem>
                                        <SlMenuItem value="Butt">Butt</SlMenuItem>
                                        <SlMenuItem value="Thights">Thights</SlMenuItem>
                                    </SlSelect>

                                    <SlInput
                                        className='label-on-top'
                                        label=' 5.  How old are you ?'
                                        name='age'
                                        type='age'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlInput
                                        className='label-on-top'
                                        label='6.  What’s your weight ? (Kg)'
                                        name='weight'
                                        type='weight'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlInput
                                        className='label-on-top'
                                        label='7.  What’s your target rate ?'
                                        name='targetrate'
                                        type='targetrate'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlInput
                                        className='label-on-top'
                                        label='8.  How many push up can you do?'
                                        name='pushup'
                                        type='pushup'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlInput
                                        className='label-on-top'
                                        label='9.  How much do you walk daily?'
                                        name='walk'
                                        type='walk'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>

                                    <SlInput
                                        className='label-on-top'
                                        label='10.  How often do you exercise ?'
                                        name='exercise'
                                        type='exercise'
                                        required
                                        size='medium'
                                        pill
                                        autocomplete='off'
                                        onSlFocus={() => setErrorFeedBack('')}
                                        onSlInput={(event) => handleChange(event)}
                                    ></SlInput>
                                </Form>
                                <div className='row justify-content-center'>
                                    <SlButton type='submit' size='medium' pill className='submit-btn-simulator mb-5' >
                                        Continue
                                    </SlButton>
                                </div>

                            </form>

                            <SlAlert ref={primary} variant="primary" duration="6000" closable>
                                <SlIcon slot="icon" name="info-circle" />
                                <strong>Your registration has been sent</strong>
                                <br />
                                Once your registration has been validated, you will receive a confirmation email.
                            </SlAlert>
                        </div>
                    </div>
                </>
            )

        case 2:
            return (
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h1 className='col text-center mt-5 mb-5'>
                            Thanks for sharing!
                        </h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col text-center'>
                            <img src={thanks} alt='thanks icon' />
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5'>
                        <div className='col-11 col-lg-6 text-center'>
                            <p>
                                There’s strong scientific evidence that being physically active can help you lead a healthier
                                and happier life.
                            </p>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5'>
                        <SlButton type='submit' size='medium' pill className='submit-btn-simulator mb-5 col-4 col-sm-3 col-lg-2' onSlFocus={handleSubmit} >
                            Continue
                        </SlButton>
                    </div>

                </div >
            )


        case 3:
            return (

                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col'>
                            <h2 style={{ 'marginTop': '3rem' }} className='row justify-content-center'>Let get to know you </h2>
                        </div>
                        <Form>
                            <form onSubmit={handleSubmit} className='form-register-simulator '>
                                <p className="align-self-start font-weight-bold ">Questions ?</p>
                                <SlSelect
                                    label='1. What’s your diet preference ?'
                                    className='label-on-top'
                                    name='preferencediet'
                                    type='preferencediet'
                                    required
                                    size='medium'
                                    pill
                                    onSlFocus={() => setErrorFeedBack('')}
                                    onSlChange={(event) => handleChange(event)}
                                >
                                    <SlMenuItem value="Vegetarian">Vegetarian</SlMenuItem>
                                    <SlMenuItem value="Vegan">Vegan</SlMenuItem>
                                    <SlMenuItem value="Non - Vegetarian">Non - Vegetarian</SlMenuItem>
                                </SlSelect>

                                <SlSelect
                                    label='2. What king of food do you consume ?'
                                    className='label-on-top'
                                    name='foodconsume'
                                    type='foodconsume'
                                    required
                                    size='medium'
                                    pill
                                    onSlFocus={() => setErrorFeedBack('')}
                                    onSlChange={(event) => handleChange(event)}
                                >
                                    <SlMenuItem value="Fast food">Fast food</SlMenuItem>
                                    <SlMenuItem value="Healthy food">Healthy food</SlMenuItem>
                                </SlSelect>

                                <SlSelect
                                    label='3. What’s your daily water intake ?'
                                    className='label-on-top'
                                    name='waterdaily'
                                    type='waterdaily'
                                    required
                                    size='medium'
                                    pill
                                    onSlFocus={() => setErrorFeedBack('')}
                                    onSlChange={(event) => handleChange(event)}
                                >
                                    <SlMenuItem value="0 glass">0 glass</SlMenuItem>
                                    <SlMenuItem value="1 glass">1 glass</SlMenuItem>
                                    <SlMenuItem value="2 glass">2 glass</SlMenuItem>
                                    <SlMenuItem value="3 glass">3 glass</SlMenuItem>
                                    <SlMenuItem value="4 glass">4 glass</SlMenuItem>
                                    <SlMenuItem value="5 glass">5 glass</SlMenuItem>
                                </SlSelect>

                                <SlSelect
                                    label='4. For how long are you ready to commit to your body goal ?'
                                    className='label-on-top'
                                    name='longbodygoal'
                                    type='longbodygoal'
                                    required
                                    size='medium'
                                    pill
                                    onSlFocus={() => setErrorFeedBack('')}
                                    onSlChange={(event) => handleChange(event)}
                                >
                                    <SlMenuItem value="1 month">1 month</SlMenuItem>
                                    <SlMenuItem value="2 month">2 months</SlMenuItem>
                                    <SlMenuItem value="3 month">3 months</SlMenuItem>
                                    <SlMenuItem value="4 month">4 months</SlMenuItem>
                                    <SlMenuItem value="5 month">5 months</SlMenuItem>
                                    <SlMenuItem value="6 month">6 months</SlMenuItem>
                                    <SlMenuItem value="7 month">7 months</SlMenuItem>
                                    <SlMenuItem value="8 month">8 months</SlMenuItem>
                                    <SlMenuItem value="9 month">9 months</SlMenuItem>
                                    <SlMenuItem value="10 month">10 months</SlMenuItem>
                                    <SlMenuItem value="11 month">11 months</SlMenuItem>
                                    <SlMenuItem value="12 month">12 months</SlMenuItem>

                                    <SlMenuItem value="1 year">1 year</SlMenuItem>
                                    <SlMenuItem value="2 year">2 years</SlMenuItem>
                                    <SlMenuItem value="3 year">3 years</SlMenuItem>
                                    <SlMenuItem value="4 year">4 years</SlMenuItem>
                                    <SlMenuItem value="5 year">5 years</SlMenuItem>

                                </SlSelect>

                                <div className='row justify-content-center'>
                                    <SlButton type='submit' size='medium' pill className='submit-btn-simulator mt-5' >
                                        Continue
                                    </SlButton>
                                </div>

                            </form>

                        </Form>

                        <SlAlert ref={primary} variant="primary" duration="6000" closable>
                            <SlIcon slot="icon" name="info-circle" />
                            <strong>Your registration has been sent</strong>
                            <br />
                            Once your registration has been validated, you will receive a confirmation email.
                        </SlAlert>
                    </div>
                </div>
            )

        case 4:
            return (
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h1 className='col text-center mt-5 mb-5'>
                            Good choice
                        </h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col text-center'>
                            <img src={muscle} alt='muscle icon' />
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5'>
                        <div className='col-11 col-lg-6 text-center'>
                            <p>
                                Commiting is a great start to reach visible
                                results both on your body and mind.
                            </p>
                            <p>
                                Click here to get your result.
                            </p>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5'>
                        <SlButton type='submit' size='medium' pill className='submit-btn-simulator mb-5 col-4 col-sm-3 col-lg-2' onSlFocus={handleSubmit} >
                            My result
                        </SlButton>
                    </div>

                </div >
            )


        default:

    }


}


const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:90%;
margin:auto;
flex-wrap:wrap;
padding:0;
justify-content:center;
align-items:center;
`

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
margin:3rem;
padding:3rem;
border-radius:30px;
background-color:#EAEAEA;
width:95%;
justify-content:center;
`

export default Simulator