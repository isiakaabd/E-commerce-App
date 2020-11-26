import React, { Component } from 'react'
import { StoreProducts, detailProduct } from "./State"

const Context = React.createContext()


export class Provider extends Component {

    state = {
        Products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        price: 0,
        cartSubTotal: 0,
        cartTotal: 0





    }

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        StoreProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { Products: tempProducts }
        })

    }

    // open modal
    openModal = id => {
        const Product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: Product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }



    decrement = (id) => {
        let tempCart = [...this.state.cart];
        console.log(tempCart)
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const Product = tempCart[index];



        Product.count = Product.count - 1;
        if (Product.count === 0) {
            this.removeItem(id)
        } else {
            Product.total = Product.count * Product.price


            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => { this.addTotals() })
        }


    }

    removeItem = (id) => {
        let tempProducts = [...this.state.Products];
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id)



        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                Products: [...tempProducts]
            }
        }, () => {
            this.addTotals()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setProducts();
            this.addTotals()
        })
    }


    // TO REPlACE OUR DEFAULT OBJECT HOLDER
    getItem = id => {
        // very important function
        const Product = this.state.Products.find(item => item.id === id)
        return Product;
    }


    handleDetail = (id) => {
        const Product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: Product }
        })
    }

    addTOCart = (id) => {
        let tempProducts = [...this.state.Products]
        const index = tempProducts.indexOf(this.getItem(id));
        const Product = tempProducts[index];
        Product.count = 1;
        const price = Product.price;
        Product.total = price;
        this.setState(() => {
            return { Products: tempProducts, cart: [...this.state.cart, Product] };
        }, () => { this.addTotals() });
    }



    increment = (id) => {
        let tempCart = [...this.state.cart];
        console.log(tempCart)
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const Product = tempCart[index];




        Product.count = Product.count + 1;

        Product.total = Product.count * Product.price
        console.log(
            Product.total)
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => { this.addTotals() })

    }








    addTotals = () => {
        let subTotal = 0;

        this.state.cart.map((item) => subTotal += item.total)

        console.log(subTotal)
        const total = subTotal



        this.setState(() => {

            return {
                cartSubTotal: subTotal,
                cartTotal: total

            }
        })
    }




    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addTOCart: this.addTOCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer