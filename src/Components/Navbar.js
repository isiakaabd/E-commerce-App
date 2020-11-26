import React, { Component } from 'react'
import { Link } from "react-router-dom";
import imglogo from "../imglogo.svg";
import { ButtonContainer } from "./ButtonContainer"
import styled from "styled-components"



export default class Navbar extends Component {
    render() {
        return (
            <NavContainer className="nav bar navbar-expand-sm navbar-light px-sm-2" >
                <Link to="/">
                    <img src={imglogo} style={{ width: "30px" }} alt="logo" className="navbar-brand  " />
                </Link>
                <ul className="nav bar-nav align-items-left">
                    <li className="nav item ml-1">
                        <Link to="/" className="nav-link">
                            products
                </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto ">
                    <ButtonContainer>
                        <span>  <i className="fas fa-cart-plus px-2"></i> </span>
                        my cart

                    </ButtonContainer>
                </Link>
            </NavContainer>





        )



    }
}



const NavContainer = styled.nav`
background: var(--mainBlue) !important;

.nav-link{
    color: var(--mainWhite)  !important;
    font-size:1.4rem;
    text-transform:capitalize
}



`