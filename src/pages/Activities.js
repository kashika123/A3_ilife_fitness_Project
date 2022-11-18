import React from 'react'
import '../styles/Activities.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Zumba1 from '../static/images/home/ZUMBA IMAGE 1.png'
import Zumba2 from '../static/images/home/ZUMBA IMAGE 2.png'
import Zumba3 from '../static/images/home/ZUMBA IMAGE 3.png'
import Cardio1 from '../static/images/home/CARDIO IMAGE 1.png'
import Cardio2 from '../static/images/home/CARDIO IMAGE 2.png'
import Cardio3 from '../static/images/home/CARDIO IMAGE 3.png'
import Martial1 from '../static/images/home/MARTIAL IMAGE 1.png'
import Martial2 from '../static/images/home/MARTIAL IMAGE 2.png'
import Martial3 from '../static/images/home/MARTIAL IMAGE 3.png'



const Activities = () => {
    return (
        <>
            <Container fluid >
                <Row className="justify-content-center">
                    <Col md='auto' className="mt-5 text-center"><h1>Activities</h1></Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Zumba1} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Zumba2} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='12' lg='12' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Zumba3} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs='1'></Col>
                    <Col xs='11'>
                        <h2>Zumba</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs='1'></Col>
                    <Col xs='10'>
                        <p className='activities'>
                            This workout is a dynamic fitness program using Latin dance flavor. Come experience the exhilaration of moving your body to the rhythm of the music! This class features easy-to-follow moves in interval training sessions with fast and slow rhythms, stretching, and most importantly FUN!
                            <p className='activities'> At Ilife-fitness we add some Hip-Hop flavor for some more fun!</p>
                        </p>
                    </Col>
                </Row>


                <Row className="justify-content-center mt-5">
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Cardio1} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Cardio2} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='12' lg='12' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Cardio3} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs='1'></Col>
                    <Col xs='11'>
                        <h2>Cardio</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs='1'></Col>
                    <Col xs='10'>
                        <p className='activities'>
                            This workout is a dynamic fitness program using Latin dance flavor. Come experience the exhilaration of moving your body to the rhythm of the music! This class features easy-to-follow moves in interval training sessions with fast and slow rhythms, stretching, and most importantly FUN!
                            <p className='activities'> At Ilife-fitness we add some Hip-Hop flavor for some more fun! </p>
                        </p>
                    </Col>
                </Row>



                <Row className="justify-content-center mt-5">
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Martial1} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='6' lg='5' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Martial2} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                    <Col xs='12' md='12' lg='12' xl='4' className='mt-5 text-center justify-content-around'>
                        <img src={Martial3} alt='Zumba image 1' width='390' height='288' />

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs='1'></Col>
                    <Col xs='11'>
                        <h2>Martials Arts</h2>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs='1'></Col>
                    <Col xs='10'>
                        <p className='activities'>
                            - Kick-Boxing is a group of stand-up combat sports based on kicking and punching, historically developed from karate,Muay Thai, Taekwondo and Western boxing.
                            <br></br>
                            <p className='activities'>
                                - Krav Maga is an effective, modern, and dynamic self-defense and fighting system.  The techniques expand on your natural instincts to develop skills quickly and effectively, while enabling you to address attacks under any scenario.
                            </p>
                        </p>
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default Activities