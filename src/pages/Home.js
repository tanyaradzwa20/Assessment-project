import React from 'react'
import './Home.css'
// import { Container, Row, Col,} from "react-bootstrap"
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Hero = styled.div`
  background: #0747A1;
  height: 530px;
  position: relative;
@media (max-width: 575px) {

}
@media (min-width: 768px) and (max-width: 991px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) {

}
`
const HeroHeader = styled.h1`
font-family: 'Wiggly Curves', sans-serif;
font-weight: 400;
font-size: 60px;
color: white;
text-align: center;
padding: 6% 25% 0;

`

const HeroImg = styled.img`
object-fit: cover;
width: 100%;
top: -45%;
position: relative;

`

const BillboardPlauground = styled.div`
    position: relative;

`

const BillboardImg = styled.img`
    object-fit: cover;
    width: 100%;
    top: -103px;
    position: relative;
    /* position: absolute; */

`


function Billboard() {
    return <>
      <Hero>
            <HeroHeader>A Playground to introduce programming to beginners!</HeroHeader>
            <Link to="/" className='Links '>Get Coding!</Link>
            <HeroImg src={require('../images/Hero.png')} alt="assessmentimage"/>               
            {/* <BillboardImg src={require('../images/billboardInner.png')} alt="assessmentimage"/> */}

      </Hero></>
  }
function BillboardInner() {
    return <>
        <BillboardPlauground>
                <BillboardImg src={require('../images/billboardInner.png')} alt="assessmentimage"/>
        </BillboardPlauground>
        </>
}


function Home(){
    return (<>
        <Billboard/>
        <BillboardInner/>
    </>

    )

}

export default Home