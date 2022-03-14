import React, { useState } from 'react';

function DigitalWatch() {
  let [state, setState] = useState({
    currentTime: new Date().toLocaleTimeString(),
  });

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg text-center">
              <div className="card-header bg-warning">
                <p className="h4">Digital Watch</p>
              </div>
              <div className="card-body">
                <h3 className="display-4">{state.currentTime}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DigitalWatch;
