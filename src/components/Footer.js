import React from 'react';
import {Link } from 'react-router-dom';
import './Components.css'
import styled from 'styled-components';
import { Container, Row, Col,} from "react-bootstrap"


const FooterContainer = styled.div`
    background: #0747A1;
    margin-top:20%;
    position: relative;

`
const FooterImage = styled.img`
  width: 90%;
  position: relative;
  top: -16%;
  margin: auto;

`
const FooterHeading = styled.h4`
font-family: 'Wiggly Curves', sans-serif;
font-weight: 400;
font-size: 50px;
color: white;
margin: 5% 0;
`


const FooterParagraph = styled.p`
  font-family: 'Chillax', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: white;
`
const FooterParagraphend = styled.p`
  font-family: 'Chillax', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;


`

function Footer() {
    return (
        <>
        <FooterContainer>
          <Container>
            <Row>
                <Col md={6}>
                    <FooterImage  src={require('../images/card1.png')} alt="assessmentimage"/>

                </Col>
                <Col md={6}>
                    <FooterHeading>You’re Still Reading through? Get to coding and have fun!</FooterHeading>
                    <FooterParagraph>We make learning really easy by teaching you coding with an MIT software called Scratch. </FooterParagraph>
                    <Link to="/" className='Links footerbutton '>Get Coding!</Link>
                    <FooterParagraphend className='footerbefore'>Designed & developed by boost participants </FooterParagraphend >
                </Col>
            </Row>
            
          </Container>
        </FooterContainer>
        </>
    )
}

export default Footer