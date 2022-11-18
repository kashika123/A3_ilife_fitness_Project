import React from 'react'
import styled from 'styled-components'
import '../styles/Membership.css'
import logo from '../static/images/logocard.png'
import { useNavigate } from 'react-router-dom'



const Membership = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/form-register')
    }

    return (
        <><div className='container-fluid text-membership'>
            <Title>Membership</Title>

            <div className='row justify-content-around align-items-center' >

                <div className='col-9 col-sm-6 col-md-4 col-xl-4 col-xxl-3 mt-5 mb-5 text-center'>
                    <WrapperCard1>
                        <Card1Wrapper>
                            <Card1Shadow>
                            </Card1Shadow>
                            <Card1>
                                <img src={logo} width='100%' className='img-fluid' />
                            </Card1>
                        </Card1Wrapper>

                    </WrapperCard1>
                </div>

                <div className='col-11 col-sm-9 col-md-6 col-lg-5 col-xl-5 col-xxl-3 text-center mt-5'>
                    <WrapperCard2>
                        <Card2>
                            <Card2Title>
                                MY ACCESS
                            </Card2Title>
                            <PriceLine>
                                <Line>

                                </Line>
                                <Price>
                                    <div style={{ "fontSize": '1.8rem', 'color': '#C42936', 'fontWeight': 'bold' }}> RS 499 </div> <div>  for the 1st month</div>

                                </Price>
                                <Line>

                                </Line>
                            </PriceLine>
                            <Mention>then Rs 499 the folowing months</Mention>

                            <List>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Access to your life fitness</li>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Cardio training</li>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Guided strength training</li>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Free weight</li>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Virtual lessons</li>
                                <li><span style={{ "font-size": '2rem' }}>&#8594;</span>    Cross-Park</li>

                            </List>
                            <Card2Footer onClick={handleNavigate}>
                                PRE-REGISTER
                            </Card2Footer>

                        </Card2>

                    </WrapperCard2>
                </div>
            </div>
        </div>
        </>
    )
}

const Title = styled.h1`
margin-top:3rem;
margin-bottom:3rem;
text-align:center
`
const Mention = styled.div`
font-size:0.7rem;
margin-left:40px;
`

const List = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
`

const Wrapper = styled.div`
font-family: 'Robotto', sans-serif;
display:flex;
width:100%;
flex-wrap:wrap;
padding:0;
justify-content:center;
`

const WrapperCard1 = styled.div`
flex-grow:;
display:flex;
position:relative;
justify-content:center;
align-items:center;

`
const WrapperCard2 = styled.div`
flex-grow:1;
display:flex;
padding:0;
justify-content:center;
align-items:center;
margin-bottom:5rem;
`

const Card1Wrapper = styled.div`
position:absolute;
display:flex;
bottom:0;
right:0;
align-items:flex-end;
justify-content:flex-end;
position:relative;

`

const Card1Shadow = styled.div`
position:absolute;
right:0;
bottom:0;
left:30px;
background-color:#D7D7D7;
transform: rotate(-20deg);
display:block;
border-radius:30px;
top:50px;
padding:1rem;

`

const Card1 = styled.div`
display:block;
right:0;
bottom:0;
background-color:black;
transform: rotate(-25deg);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:30px;
padding:1rem;

`
const Card2 = styled.div`
background-color:black;
display:block;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:30px;
padding:1rem;
width:100%;
color:white;
`

const Card2Title = styled.div`
border: solid 2px #C42936;
text-align:center;
margin-top:3rem;
border-radius:15px;
font-size:1.4rem;
font-weight:bold;
padding:1rem;
`

const Card2Footer = styled.div`
background-color:#C42936;
cursor:pointer;
text-align:center;
border-radius:15px;
font-size:1rem;
font-weight:bold;
padding:1.2rem;
margin-top:2rem;
margin-bottom:2rem;
`

const PriceLine = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
margin-top:2rem;

`

const Line = styled.div`
height:3px;
width:25%;
background-color:#C42936;
`

const Price = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:65%;
flex-wrap:no-wrap;
background-color:black;

`

export default Membership