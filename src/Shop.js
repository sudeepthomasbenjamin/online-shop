import React, { Component } from 'react'
import Cart from './Cart';
import Catalog from './Catalog';
import Checkout from './Checkout';

import './Shop.css'

class Shop extends Component{
    constructor(){
        super();

        var items=[
            {
                id:1,
                name:"Shirt",
                price:100
            },
            {
                id:2,
                name:"Pant",
                price:100
            },
            {
                id:3,
                name:"Short",
                price:100
            }
        ]

        this.state={
            items,
            cartItems:[],
            orderTotal:0
        }
    }

    addItemToCart=(item)=>{
        console.log(item)

        this.setState({
            cartItems:[...this.state.cartItems,item]
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total+cartItem.price;
                },0)
            })
        })
    }

    removeFromCart=(item)=>{
        console.log(item)

        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total+cartItem.price;
                },0)
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Shop</h1>
                <div className="row">
                    <div className="column">
                        <Catalog items={this.state.items} addItemToCart={this.addItemToCart}/>
                    </div>
                    <div className="column">
                        <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                        <Checkout orderTotal={this.state.orderTotal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;