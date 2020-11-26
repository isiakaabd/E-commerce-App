import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bolder">Product</p>

                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bolder">Title</p>


                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase  font-weight-bolder">Price</p>

                </div>


                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bolder">QuaNTITY</p>

                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bolder">remove</p>

                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bolder">Total</p>


                </div>
            </div>
        </div>

    )
}
