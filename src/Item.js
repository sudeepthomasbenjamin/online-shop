import React, { Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addItemToCart(this.state.item)
    }

    remove=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        return(
            <div>
                <h1>{this.state.item.name}</h1>
                <p>Price: {this.state.item.price}</p>
                {
                    (this.state.isCart)?
                    (<button onClick={this.remove}>Remove</button>):
                    (<button onClick={this.add}>Add To Cart</button>)
                }
            </div>
        )
    }
}

export default Item;