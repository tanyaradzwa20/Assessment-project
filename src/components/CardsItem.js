import React from 'react'
// import CardList from './CardList'
import {Col,} from "react-bootstrap"
import styled from 'styled-components';



const CardBody = styled.div`
  background: #F3F3F3;
  border: none;
  padding: 0 6% 5%;
  margin: 0 3%;
  height: 100%;
  /* width: 400px; */


`

const CardImage = styled.img`
  width: 100%;
  margin: auto;
  object-fit: contain;
  height: 304px;

`


const CardInnerContent = styled.div`
  text-align: center;

`

const CardInnerContentHeading = styled.h4`
  font-family: 'Wiggly Curves', sans-serif;
  color: #4D97FF;
  font-size: 40px;
`

const CardInnerContentParagraph = styled.p`
  font-family: 'Chillax', sans-serif;
  font-size: 15px;
  font-weight: 600;
`

function CardItem({logo, title, subTitle}) {
  return (
    <>
      <Col md={4}>
        <CardBody>
            <CardImage src={logo} alt="ProjectImage"/>
            <CardInnerContent>
                <CardInnerContentHeading className="card-title">{title}</CardInnerContentHeading>
                <CardInnerContentParagraph className="card-text">{subTitle}</CardInnerContentParagraph>
            </CardInnerContent>
        </CardBody>
      </Col>
      </>
  )
}

export default CardItem