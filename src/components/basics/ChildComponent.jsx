import React, { useState } from 'react';

function ChildComponent(props) {
  let [state, setState] = useState({
    author: 'Dulanka',
  });

  let clickButton = () => {
    props.sendData(state.author);
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col md-8">
            <div className="card shadow-lg">
              <div className="card-body bg-warning  text-dark">
                <p className="h4">Child Component</p>
                <p>{props.channel}</p>
                <button onClick={clickButton} className="btn btn-dark btn-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChildComponent;
