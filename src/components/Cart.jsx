import React, {Fragment, useState} from "react";

let Cart = () =>{

    let [state,setState] = useState({
        products:[
            {
                SNo:'A001',
                Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                name:'mi watch',
                Price:1500,
                Qty:3,
                Total:''
            },
            {
                SNo:'A002',
                Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                name:'samsung watch',
                Price:1600,
                Qty:3,
                Total:''
            },
            {
                SNo:'A003',
                Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                name:'apple watch',
                Price:2000,
                Qty:3,
                Total:''
            },
            {
                SNo:'A004',
                Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                name:'lg watch',
                Price:1500,
                Qty:3,
                Total:''
            },
            {
                SNo:'A005',
                Image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                name:'oppo watch',
                Price:1500,
                Qty:3,
                Total:''
            }

        ]
    })

    let {products} = state

    let increment = (productId) =>{
        let items = products.map(product=>{
            if(product.SNo === productId){
                return {
                    ...product,
                    Qty:product.Qty+1
                }

            }
            return product
        })

        setState((state)=>({
            products: [...items]
        }))
    }
    let decrement = (productId) =>{
        let items = products.map(product=>{
            if(product.SNo === productId){
                return {
                    ...product,
                    Qty:product.Qty-1>0?product.Qty-1:1
                }

            }
            return product
        })

        setState((state)=>({
            products: [...items]
        }))
    }

    let grandTotal = () =>{
        let total = 0;
        for(let product of products){
            total += product.Qty * product.Price
        }
        return total
    }

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">
                            Shopping cart
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
                            {
                                products.map((product)=>{
                                    return(
                                        <tr key={product.SNo}>
                                        <td>{product.SNo}</td>
                                        <td>
                                            <img src={product.Image} alt=" " width={50} height={50}/>
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.Price.toFixed(2)}</td>
                                        <td>
                                            <button onClick={()=>increment(product.SNo)}>increment</button>
                                            {product.Qty}
                                            <button onClick={()=>decrement(product.SNo)}>decrement</button>
                                        </td>
                                        <td>{(product.Qty*product.Price).toFixed(2)}</td>
                                    </tr>


                                    )
                                })
                            }
                            <tr>
                                <td colSpan={4}></td>
                                <td>Grand Total :</td>
                                <td>{grandTotal().toFixed(2)}</td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Cart