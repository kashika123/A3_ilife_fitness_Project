import React from 'react'
import successbtn from '../static/images/success_btn.jpg'
import styled from 'styled-components'
import gas from '../static/images/gas.png'
import goal from '../static/images/goal.png'
import fitness from '../static/images/fitness.png'
import { useNavigate } from 'react-router-dom'



const SimulatorResult = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='row mt-5 justify-content-center'>
                <span style={{ "color": 'black', "fontSize": '2.5rem', 'cursor': 'pointer' }} className='col-11 text-end' onClick={() => navigate('/')}>&#9587;</span>
            </div>
            <div className='row justify-content-center mt-5'>
                <div className='col text-center'>
                    <img src={successbtn} alt="success bouton" />
                </div>
            </div>

            <div className='row mt-5 justify-content-center'>
                <div className='col text-center'>
                    <h1>Your plan is ready !</h1>
                </div>
            </div>

            <div className='row mt-5 justify-content-center'>

                <div className='col-11 text-center'>
                    <WrapperCardio>

                        <div className='row mt-2'>
                            <p className='display-6'>Your Super cardio burner</p>
                        </div>
                        <div className='row'>
                            <p style={{ 'fontSize': '2rem' }}><span> <img src={goal} alt='goal lose weight' /></span> Lose Weight</p>
                        </div>
                        <div className='row'>
                            <p style={{ 'fontSize': '2rem' }}>12 weeks</p>
                        </div>
                        <div className='row'>
                            <p className='mb-2' style={{ 'fontSize': '2rem' }}><span> <img src={gas} alt='gas intermediate' /></span>Intermediate</p>
                        </div>

                    </WrapperCardio>
                </div>

                <div className='row justify-content-around mt-5'>
                    <div className='col-12 col-md-5 text-center'>
                        <WrapperWorkout>
                            <p style={{ 'fontSize': '2rem' }}>15-25</p>
                            <p style={{ 'fontSize': '2rem' }}>Minutes per workout</p>
                        </WrapperWorkout>
                    </div>
                    <div className='col-12 mt-5 mt-md-0 col-md-5 text-center '>
                        <WrapperWorkout>
                            <p style={{ 'fontSize': '2rem' }}>4 workouts</p>
                            <p style={{ 'fontSize': '2rem' }}>Minutes per workout</p>
                        </WrapperWorkout>
                    </div>
                </div>

                <div className='col-11 text-center mt-5'>
                    <WrapperCardio>

                        <div className='row mt-2'>
                            <p className='display-6'>Inside the plan</p>
                        </div>
                        <div className='row  align-items-center'>
                            <div className='col-12 col-md-7 p-5' >
                                <p className='text-start' style={{ 'fontSize': '2rem' }}>Workout guides</p>
                                <p className='text-start' style={{ 'fontSize': '2rem' }}>Healthy recipes</p>
                                <p className='text-start' style={{ 'fontSize': '2rem' }}>Interactive schedule</p>
                                <p className='text-start' style={{ 'fontSize': '2rem' }}>Be our member and get 20 % discount
                                    of our equipments on sale</p>
                            </div>
                            <div className='col-12 col-md-5 p-5'><img src={fitness} alt='goal lose weight' width='100%' /></div>
                        </div>


                    </WrapperCardio>
                </div>

                <div className='row justify-content-around mt-5'>

                    <div className='col-11 text-center mb-5 '>
                        <WrapperWorkout>
                            <p style={{ 'fontSize': '2rem' }}>We are constantly learning and improving based on your feeback</p>
                        </WrapperWorkout>
                    </div>
                </div>


            </div>

        </div >
    )
}

const WrapperCardio = styled.div`
background-color:#ee1c29;
color:white;
padding:20px;
border-radius:56px;
`

const WrapperWorkout = styled.div`
background-color:black;
color:white;
padding:20px;
border-radius:15px;
`

export default SimulatorResult