import React from 'react'
import CardItem from './CardsItem'
import { CardList } from './NavItems'
import {Container, Row,} from "react-bootstrap"
import './Components.css'
import styled from 'styled-components';
import {Link } from 'react-router-dom';



const CardHeading = styled.h3`
    font-family:'Wiggly Curves';
    font-weight:400;
    font-size:35px;
    color: #4D97FF;
    text-align: center;
    margin-top: 40px;

`

const CardHeading2 = styled.h3`
    font-family:'Wiggly Curves';
    font-weight:400;
    font-size:60px;
    color: #0747A1;
    text-align: center;
    margin-bottom: 40px;

`
const CardImg = styled.img`
position: absolute;
right: -115px;
bottom:-90px;
width: 300px;


`

function Card() {
    return (
        <>
            <Container className='MainCard'>
                <CardHeading>Super Easy & Super Fun</CardHeading>
                <CardHeading2>No prior coding experience required!</CardHeading2>
                <Row>
                    {CardList.map((cardItem, key) => {
                        return (
                            <>
                                <CardItem
                                    key={key}
                                    logo={cardItem.logo}
                                    title={cardItem.title}
                                    subTitle={cardItem.subTitle}
                                />
                            </>
                        )
                    })}
                </Row>
                <Link to="/" className='Links cardlink'>Get Coding!</Link>
                <CardImg src={require('../images/card4.png')} alt="assessmentimage"/>


            </Container>
        </>
         
    )
}

export default Card