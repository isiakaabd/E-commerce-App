import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Consumer } from "./StateContextAPI";
import styled from 'styled-components';

export default class Product extends Component {
    render() {
        const { title, price, image, id } = this.props.Product

        return (

            <ProductWrapper className="col-10 mx-auto col-md-3  col-lg-3 my-2"  >
                <div className="card" style={{ height: "100%" }}>
                    <Consumer>
                        {
                            (value) => {
                                return (
                                    <div className="img-container  p-5" onClick={() => value.handleDetail(id)} style={{ height: "100%" }}>
                                        <Link to="/details">
                                            <img src={image} alt="Product" style={{ maxHeight: "100%" }} className="card-img-top " />
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
                    <div className="card-footer d-flex justify-content-md-between">
                        <p className="align-self-center mb-0 mr-4">{title}</p>
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
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0, .2);
        box-shadow:2px 2px 5px rgba(0,0,0,.2);
    }
    .card-footer{
        background:rgba(247,247,247);
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
        transform: scale(1.1);
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
    color:var(--mainBlue)
}
cart-btn:focus{
    outline:none;
}
width:100%
`