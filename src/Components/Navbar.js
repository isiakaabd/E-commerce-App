import React, { Component } from 'react'
import { Link } from "react-router-dom";
import imglogo from "../imglogo.svg";
import { ButtonContainer } from "./ButtonContainer"
import styled from "styled-components"



export default class Navbar extends Component {
    render() {
        return (
            <NavContainer className="nav bar   mx-auto navbar-expand-lg navbar-light fixed-top px-sm-2" >
                <Link to="/">
                    {/* <span className="text-blue-20 ml-8 font-weight-bolder">R</span> */}
                    <img src={imglogo} style={{ width: "30px", marginTop: "05px", marginLeft: "20px", alignItems: "center" }} alt="logo" className="navbar-brand  " />
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