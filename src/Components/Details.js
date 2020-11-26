
import React, { Component } from 'react';
import { Consumer } from './StateContextAPI';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./ButtonContainer"

class Details extends Component {
    render() {

        return (

            <Consumer>
                {
                    value => {
                        const { id, title, description, category, image, price } = value.detailProduct

                        // console.log(title[0][2])
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">

                                        <h3>{title}</h3>

                                    </div>
                                </div>
                                {/* end of title */}


                                {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-4 my-5  py-0 px-2  ">
                                        <img src={image} className="img-fluid" alt="product" />
                                    </div>
                                    {/* product description */}
                                    <div className="col-10 mx-auto col-md-6 my-3 ">
                                        <h5 className="text-align-justify"><strong className="mr-3">Description:</strong><span className=" text-muted lead text-align-justify">{description}</span></h5>
                                        {/* </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 "> */}
                                        <h5 className="text-capitalize"><strong>Category:</strong> {category}</h5>
                                        <h2 className="text-blue"> <strong>Price:<span className="ml-2">$</span> {price}</strong></h2>

                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to Product
                                        </ButtonContainer >
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer onClick={() => {
                                                    value.addTOCart(id)
                                                    value.openModal(id)
                                                }}>Add to Cart</ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>

                                    {/*  */}
                                </div>

                            </div>

                        )
                    }
                }
            </Consumer>

        )
    }
}



export default Details
























