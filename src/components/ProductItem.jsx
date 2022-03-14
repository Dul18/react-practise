import React, {Fragment, useState} from 'react';

let ProductItem = () =>{

    let [state,setState] = useState({
        product:{
            SNo:'A123',
            Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
            name:'watch',
            Price:1500,
            Qty:3,
            Total:''
        }
    })



    let {product} = state

    let  increment = () =>{
            setState((state)=>({
                product: {
                    ...state.product,
                    Qty: state.product.Qty +1
                }
            }))
    }

    let  decrement = () =>{
        setState((state)=>({
            product: {
                ...state.product,
                Qty: state.product.Qty - 1>0? state.product.Qty-1:1
            }
        }))
    }
    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">
                            Product Item
                        </p>
                        <p>weuuuuuuuu iiiiiiiiiiiiiiiiii ppp</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th>SNo</th>
                                <th>Image</th>
                                <th>name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{product.SNo}</td>
                                <td>
                                    <img src={product.Image} alt=" " width={50} height={50}/>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    <button onClick={increment}>increment</button>
                                    {product.Qty}
                                    <button onClick={decrement}>decrement</button>
                                </td>
                                <td>{product.Qty*product.Price}</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}
export default ProductItem