import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import { Consumer } from "./StateContextAPI"


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="Container">
                        <Title name="our" title="Products" />
                        <div className="row">
                            <Consumer>
                                {
                                    (value) => {
                                        const { Products } = value
                                        return Products.map((product) => {
                                            return <Product key={product.id} Product={product} />
                                        })

                                    }
                                }
                            </Consumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
