import React, { Component } from 'react';
import { Consumer } from "./StateContextAPI";
import { ButtonContainer } from "./ButtonContainer";
import styled from "styled-components"
import { Link } from "react-router-dom"

export default class Modal extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        const { modalOpen, closeModal } = value;
                        const { image, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null
                        } else {
                            return (<ModalContainer>
                                <div className="container">

                                    <div className="row py-5">
                                        <div id="modal" className="col-9 mx-auto col-md-6 img-thumbnail  my-3 col-lg-4 text-center text-capitalize">
                                            <h5 className="py-3">item added to the cart</h5>
                                            <img src={image} className="img-fluid" alt="Product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    store
                                </ButtonContainer>
                                            </Link >
                                            <Link to="/cart">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    go to cart
                                            </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                            )
                        }
                    }
                }
            </Consumer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}

`