import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';



const Modal = ({ close }) => {

    return (
        <ModalWrapper>

            <ModalContent>
                <Crossed onClick={() => close(false)}>
                    x
                </Crossed>

                <Body>
                    <FontAwesomeIcon icon={faCircleCheck} size="5x" color='#D94432' />

                    <h1>Congratulations your payment has been successful</h1>
                    <h1>Check your email for receipt</h1>

                </Body>



            </ModalContent>

        </ModalWrapper>
    )



}

const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
    align-items:center;
    font-size:0.7rem;
    font-family: -apple-system, BlinkMacSystemFont, "anton", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

const ModalWrapper = styled.div`
    display:${props => props.display};
    position: fixed;
    z-index: 9999; 
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
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 35%;
    padding-top:5rem;
    padding-bottom:5rem;
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

export default Modal