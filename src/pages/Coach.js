import React, { useState } from 'react'
import styled from 'styled-components'
import { AvatarList } from '../datasources/coachMockData'
import CoachCard from '../container/CoachCard'
import ModalCoachCard from '../components/ModalCoachCard'
import "../styles/Coach.css";

const Coach = () => {

    const [activeCoach, setCoachActive] = useState('none')
    const [modalCoach, setModalCoach] = useState()
    const [typeModal, setTypeModal] = useState()

    const setShow = (coach, type) => {
        setTypeModal(type)
        setModalCoach(coach)
        setCoachActive('block')
    }

    return (
        <div className='mb-5'>
            <ModalCoachCard open={activeCoach} setCoach={() => setCoachActive('none')} coach={modalCoach} modal={typeModal} />

            <Title>Meet iLife FITNESS Coach Team</Title>
            <CoachWrapper>
                {AvatarList.map((coach, index) => {
                    return (
                        <>
                            <CoachCard coach={coach} id={coach.id} setShow={setShow} />
                            {index === 2 &&
                                <MiddleText className='middle-text'>
                                    Our coaches are available to train you personally . Book  an appointment to one of our coach for a personal advice and a better experience and to built your body.                                 </MiddleText>}
                        </>

                    )
                })}
            </CoachWrapper>
        </div>
    )
}

const MiddleText = styled.div`
padding:2rem;
margin-left:17%;
margin-right:17%;
font-size:1.5rem;
`

const Title = styled.h1`
margin-top:3rem;
margin-bottom:3rem;
text-align:center
`

const CoachWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;

`

export default Coach