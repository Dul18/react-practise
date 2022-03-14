import React, {Fragment, useState} from "react";

let RegisterForm = () =>{

    let [state,setState] = useState({
        user: {
            username: '',
            email:'',
            password:'',
            designation:'',
            bio:'',
            terms:false
        }
    })

    let {user} = state;

    let updateInput = (event) =>{
        setState((state)=>({
            user:{
                ...state.user,
                [event.target.name] : event.target.value
            }
        }))
    }

    let updateTerm = (event) =>{
        setState((state)=>({
            user:{
                ...state.user,
                [event.target.name] : event.target.checked
            }
        }))
    }

    let submitRegister = (event)=> {
        event.preventDefault();
        console.log(user)
    }

    return(
        <Fragment>
            {/*<pre>{JSON.stringify(state.user)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <p className="h4">
                                  Register Here
                                </p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister}>
                                    <div className="mt-3">
                                        <input
                                            name="username"
                                            value={user.username}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="User name"/>
                                    </div>
                                    <div className="mt-3">
                                        <input
                                            name="email"
                                            value={user.email}
                                            onChange={updateInput}
                                            type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mt-3">
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={updateInput}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mt-3">
                                        <select
                                            name="password"
                                            value={user.designation}
                                            className="form-control">
                                            <option value=" ">Select Designation</option>
                                            <option value="software engineer">Software Engineer</option>
                                            <option value="senior software engineer">Senior Software Engineer</option>
                                            <option value="Tech Lead">Tech Lead</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="director">Director</option>

                                        </select>
                                    </div>
                                    <div className="mt-3">
                                       <textarea
                                           name="bio"
                                           value={user.bio}
                                           rows={4} className="form-control" placeholder="Bio"/>
                                    </div>
                                    <div className="mt-3">
                                       <input name="terms" onChange={updateTerm} type="checkbox" className="form-check-input"/>Accept Terms
                                    </div>
                                    <div className="mt-3">
                                        <input type="submit" className="btn btn-warning btn-sm" value="Register"/>
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

export default RegisterForm