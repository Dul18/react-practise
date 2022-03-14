import React, {Fragment, useState} from 'react';


let WishCounter = () =>{
    let [state,setState] = useState({
        message:"Hello"
    })

    let goodMorning = () =>{
        setState((state)=>({
            message:"Good Morning"
        }))
    }

    let goodAfternoon = (value) =>{
        setState((state)=>({
            message: value
        }))
    }

    let goodNight = () =>{
        setState((state)=>({
            message:"Good Night"
        }))
    }

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">
                                    Wish Message
                                </p>
                            </div>
                            <div className="card-body">
                                <h5 className='display-3'>
                                    {state.message}
                                </h5>
                               <button onClick={goodMorning}className='btn btn-success btn-sm'>Good Morning</button><br/><br/>
                                <button onClick={()=>goodAfternoon ('goodAfternoon')} className='btn btn-warning btn-sm'>Good Afternoon</button><br/><br/>
                                <button onClick={()=>{setState((state)=>({message:'Good Night'}))}} className='bt n btn-danger btn-sm'>Good night</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default WishCounter;