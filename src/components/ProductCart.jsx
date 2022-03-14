import React, { useState } from 'react';
import ProductService from '../services/ProductService';

function ProductCart() {
  let [state, setState] = useState({
    products: ProductService.getAllProducts(),
  });

  let { products } = state;
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Product Cart</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ea delectus praesentium! Deserunt ipsa, doloribus numquam dolorum
              unde alias veritatis minus, fugit aliquam vero ducimus ad quas.
              Blanditiis, labore doloremque.
            </p>

            <div className="container mt-3">
              <div className="row align-item-center">
                <div className="col-md-8">
                  {products.map((product) => {
                    return (
                      <div key={product.SNo} className="card shadow-lg mt-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <img
                                src={product.Image}
                                alt=""
                                className="img-fluid"
                              ></img>
                            </div>
                            <div className="col-md-6">
                              <h5 className="display-4">{product.name}</h5>
                              <h6 className="display-6">
                                {product.Price.toFixed(2)}
                              </h6>
                              <h6 className="display-6">
                                {product.Qty >= 10 && (
                                  <span className="text-success">
                                    Available
                                  </span>
                                )}
                                {product.Qty <= 10 && product.Qty >= 1 && (
                                  <span className="text-warning">
                                    Almost out of stock
                                  </span>
                                )}
                                {product.Qty === 0 && (
                                  <span className="text-danger">
                                    Out of the stock
                                  </span>
                                )}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
