import React, { Component } from 'react'
import { Link } from "react-router-dom";
import imglogo from "../imglogo.svg";
import { ButtonContainer } from "./ButtonContainer"
import styled from "styled-components"



export default class Navbar extends Component {
    render() {
        return (
            <NavContainer className="navbar  mx-auto navbar-expand-sm navbar-light  " >
                <Link to="/">
                    {/* <span className="text-blue-20 ml-8 font-weight-bolder">R</span> */}
                    <img src={imglogo} style={{ width: "30px", }} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-sm-5">
                        <Link to="/" className="nav-link">
                            products
                </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto">
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

   
  
    
    


width:100% !important;
margin-bottom: 10px

`