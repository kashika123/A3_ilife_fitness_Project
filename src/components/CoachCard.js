import React, { useState } from 'react'
import styled from 'styled-components'
import ModalCoachCard from './ModalCoachCard'
import { useNavigate } from "react-router-dom";



const CoachCard = ({ coach, setShow, authenticatedRedux }) => {
    const navigate = useNavigate()

    return (<>
        <Wrapper className='me-sm-5 ms-sm-5 me-lg-20 ms-lg-20'>
            <div className='container-fluid'>
                <div className='row'>
                    <Avatar src={coach.img} className='img-fluid' />
                    <Container>
                        <Name>
                            <CoachName className='mt-3'>{coach.name}</CoachName>
                            <p className='mt-3'>{coach.type}</p>
                            <BtnAppointment className='mt-3' onClick={() => {
                                if (authenticatedRedux === true) {
                                    setShow(coach, 'appointement')
                                } else {
                                    navigate('/login')
                                }
                            }} >
                                Book Appointement
                            </BtnAppointment>
                            <BtnAppointment className='mt-3' onClick={() => {
                                if (authenticatedRedux === true) {
                                    setShow(coach, 'learn')
                                } else {
                                    navigate('/login')
                                }
                            }}>
                                Learn More
                            </BtnAppointment>
                        </Name>
                    </Container>
                </div>
            </div>
        </Wrapper>

    </>
    )
}

const Wrapper = styled.div`

    margin-bottom:3rem;
    position:relative;
    width:20rem;
    height:35rem;
    background:white;
    
`

const Container = styled.div`
    display:flex;
    position absolute;
    justify-content:center;
    left: 0;
    right: 0;
    margin: auto;
    bottom:0;
    height:27rem;
    background:black;
    border-radius:30px;
`

const Avatar = styled.img`
    width:17rem;
    left: 0;
    right: 0;
    top:0;
    border-radius: 50%;
    margin: auto;
    z-index:1;
    position:absolute;
`
const CoachName = styled.p`
font-size:1.5rem;
`

const Name = styled.div`
    flex-direction:column;
    display:flex;
    align-items:center;
    margin-top:60%;
    color:white;
`

const BtnAppointment = styled.p`
    border : 3px solid #C42936;
    cursor:pointer;
    text-align:center;
    padding:0.7rem;
    padding-left:1.7rem;
    padding-right:1.7rem;
    border-radius:30px;
    width:100%;
    &:hover {
        background-color:#C42936;
    }
`

export default CoachCard