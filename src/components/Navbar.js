import React from 'react';
import {Link } from 'react-router-dom';
import './Navbar.css'
import styled from 'styled-components';
import {NavbarData} from './NavItems'



const NavLogoContent = styled.div`
display: flex;
width: 100%;
background: #0747A1;
height: 12vh;
padding:4% 2%;
z-index: 2;
align-items: center;

@media (max-width: 575px) {
    width: 50%;
}
// Small devices (landscape phones, 576px and up 767)
@media (min-width: 568px) and (max-width: 767px) {
}

`

const NavItems = styled.div`
display: flex;
align-items: center;

@media (max-width: 575px) {
    display: none;
}
`

const NavList = styled.li`
list-style: none;
                                                

`


const Logo = styled.img`
object-fit: contain;
margin: 0 3%;
                                                

`



function Navbar() {

    return (
        <>
        <div className="navbar">
            <NavLogoContent>

            <NavItems>
                {NavbarData.map((item, i) =>{
                        return(
                            < NavList key={i} className={item.cName}>
                                <Link to={item.path} className='navItems'>
                                    {item.title}
                                </Link>
                            </ NavList>
                        )
                    })}
                <Logo src={require('../images/Scratchlogo.png')} alt="assessmentimage"/>               

                

            </NavItems>
            <Link to="/" className='Links NAV-LINK'>Get Coding!</Link>
            </NavLogoContent>

        </div>

        </>
    )
}

export default Navbar