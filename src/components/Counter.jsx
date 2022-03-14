import React, { Fragment, useState } from 'react';

let Counter = () =>{

    let [state,setState] = useState({count:0})

    let incrCounter = () =>{
        setState((state)=>({
            count:state.count +1
        }))
    }

    let decrCounter = () =>{
        setState((state)=>({
            count:state.count -1
        }))
    }
    return ( 
        <Fragment>
       <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                           <p className="h4">
                               Counter
                           </p>
                        </div>
                        <div className="card-body">
                       <h5 className='display-3'>
                       {state.count}
                       </h5>
                       <button onClick={incrCounter}className='btn btn-success btn-sm'>Increment</button><br/><br/>
                       <button onClick={decrCounter} className='btn btn-warning btn-sm'>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        </Fragment>
     );
}

export default Counter