import React, { Component } from 'react';
import Styled from "styled-components";
import { Link, link } from "react-router-dom";
import { Consumer } from "./StateContextAPI";
import styled from 'styled-components';

export default class Product extends Component {
    render() {
        const { title, price, image, id } = this.props.Product

        return (

            <ProductWrapper className="col-9 mx-auto col-md-8 col-lg-1.5 my-3  img-fluid">
                <div className="card">
                    <Consumer>
                        {
                            (value) => {
                                return (
                                    <div className="img-container  p-2" onClick={() => value.handleDetail(id)} >
                                        <Link to="/details">
                                            <img src={image} alt="Product" className="card-img-top img-fluid" />
                                        </Link>
                                        <button className="cart-btn" onClick={() => {
                                            value.addTOCart(id)
                                            value.openModal(id)
                                        }} >
                                            <p className="text-capitalize mb-0">cart</p>
                                            <span><i className="fas fa-cart-plus" /></span></button>
                                    </div>
                                )
                            }
                        }
                        {/* 
                         */}
                    </Consumer>
                    <div className="card-footer d-flex justify-content-lg-between">
                        <p className="align-self-left mb-0 mr-4">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-2">$</span>{price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0, .2);
        box-shadow:2px 2px 5px rgba(0,0,0,.2)
    }
    .card-footer{
        background:rgba(247,247,247)
    }
}
    .img-container{
        position:relative;
        overflow:hidden;
        
    }
    .card-img-top{
        transition: all 2s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1)
    }
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        color:red;
        padding:0.2rem 0.4rem;
        background:var(--lightBlue);
        border: none;
        color:var(--mainWhite);
        font-size:1.2rem;
        border-radius:.5rem 0 0 0;
        transform: translate(100% ,100%);
        transition:all 1s linear;
       
    }
    .img-container:hover .cart-btn{
        transform: translate(0,0);
    }
.cart-btn:hover{
    color:var(--mainBluel)
}
cart-btn:focus{
    outline:none;
}

`