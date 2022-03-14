//two way data binding
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
import React, {Fragment, useState} from "react";

let Username = () =>{

    //component
    let [state,setState] = useState({
        username:" "
    })

    //two way data binding -> html to component
    let updateInput = (event) =>{
        setState((state)=>({
            username:event.target.value
        }))

    }

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">
                                   User Name
                                </p>
                            </div>
                            <div className="card-body bg-light">
                              <form>
                                  <div className="mt-3">
                                    <input
                                        value={state.username}
                                        onChange={updateInput}
                                        type="text" className="form-control"/>
                                  </div>
                                {/*htmal*/}
                                 <h3>{state.username}</h3>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Username