import React, {Fragment, useState} from "react";

let LoginForm = () =>{

    let [state,setState] = useState({
        user:{
            username:'',
            password: ''
        }
    })

    let {user} = state

   // let  changeUsername = (event) =>{
   //      setState((state)=>({
   //          user:{
   //              ...state.user,
   //              username:event.target.value
   //          }
   //      }))
   // }
   //
   // let changePassword = (event) =>{
   //      setState((state)=>({
   //          user:{
   //              ...state.user,
   //              password: event.target.value
   //          }
   //      }))
   // }

    let changeInput = (event) =>{
        setState((state)=>({
            user:{
                ...state.user,
                [event.target.name]:event.target.value
            }
        }))
    }
   let submitLogin = (event)=>{
        event.preventDefault();
        console.log(user)
   }

    return(
        <Fragment>
            {/*<pre>{JSON.stringify(state)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">
                                   Login here
                                </p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitLogin}>
                                    <div className="mt-3">
                                        <input
                                            name="username"
                                            value={user.username}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="User name"/>
                                    </div>
                                    <div className="mt-3">
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={changeInput}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mt-3">
                                        <input
                                            type="submit" className="btn btn-success btn-sm" value='Login'/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginForm