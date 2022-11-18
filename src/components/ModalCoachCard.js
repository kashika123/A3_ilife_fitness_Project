import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import images from '../static/images/avatar/51.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';




const ModalCoachCard = ({ coach, open, setCoach, modal }) => {

    const [openModal, setOpenModal] = useState(open)

    useEffect(() => {
        setOpenModal(open)
    }, [open])


    return (
        <> {coach &&
            <Modal display={openModal}>

                <ModalContent>
                    <Crossed onClick={setCoach}>
                        x
                    </Crossed>
                    <Avatar src={coach.img} />

                    {modal && modal === "appointement" ?
                        <Body>



                            <CatchPhrase>
                                {coach.catchphrase}
                                <div className='mt-3'> Contact me</div>


                            </CatchPhrase>

                            <Contact>
                                <ListContact className='mt-3'>
                                    <li><FontAwesomeIcon icon={faEnvelope} size='1.5x' color='#000000' /> {coach.email}</li>
                                    <li style={{ 'marginLeft': '1rem' }}><FontAwesomeIcon icon={faSquarePhone} size='1.5x' color='#000000' />{coach.phoneNumber}</li>
                                </ListContact>
                            </Contact>


                        </Body> :

                        <Body>
                            <Description>
                                {coach.description}
                            </Description>

                        </Body>

                    }


                </ModalContent>

            </Modal>
        }

        </>
    )
}

const Modal = styled.div`
    display:${props => props.display};
    position: fixed;
    z-index: 5; 
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden; 
    background-color: rgba(0,0,0,0.4); 
    @media (max-width: 768px) {
       
      }
`


const ModalContent = styled.div`
    background-color: #fefefe;
    position:relative;
    margin: 5% auto; 
    border: 1px solid #888;
    width: 35%;
    min-height:50%;
    border-radius:2rem;

    @media (max-width: 528px) {
        margin-top:35%;
        width:100%;
      }

    @media (max-width: 768px) {
        margin-top:35%;
        width:75%;
      }
      @media (max-width: 561px) {
        margin-top:60%;
        width:75%;
      }

      @media (max-width: 1277px) {
        margin-top:35%;
        width:75%;
      }
`

const Avatar = styled.img`
    width:40%;
    position:absolute;
    left:0;
    right:0;
    top:-20%;
    border-radius: 50%;
    margin: auto;
    z-index:1;

    @media (max-width: 528px) {
        top:-15%;
        width:50%;
      }
         
    `


const Crossed = styled.span`
    margin:1rem;
    position:absolute;
    top:0;
    right:0;
    font-family: 'Robotto', sans-serif;
    font-size: 3rem;
    cursor:pointer;
`

const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:30%;
    
`

const CatchPhrase = styled.p`
    text-align:center;
    color:#C42936;
    font-weight:bold;
    font-size:1.5rem;
`

const Contact = styled.div`
    font-family: 'Robotto', sans-serif;
    color:#B0464C;
    font-weight:bold;
`

const ListContact = styled.ul`
    display:flex;
    font-size:1.5rem;
    padding:0;
    list-style-type:none;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
    align-items:center;

    @media (max-width: 528px) {
        font-size:1rem;
        margin-top:35%;
        flex-direction:column;
        justify-content:center;
        width:100%;
      }
`

const Description = styled.div`
    display:flex;
    padding:4rem;
    justify-content:center;
    align-items:center;
    line-height:2rem;
    font-family: 'Robotto', sans-serif;
    color:#000000;
    font-weight:bold;

`

export default ModalCoachCard