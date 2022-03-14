import React, { useState } from 'react';

function AuthUser() {
  let [state, setState] = useState({
    isLoggedin: true,
  });

  let login = () => {
    setState((state) => ({
      isLoggedin: true,
    }));
  };

  let logout = () => {
    setState((state) => ({
      isLoggedin: false,
    }));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-lg">
              <div className="card-body">
                {state.isLoggedin ? (
                  <p className="h3">Welcome MR.NIRMAN !</p>
                ) : (
                  <p className="h3">Welcome Guest !</p>
                )}

                {state.isLoggedin ? (
                  <button onClick={logout} className="btn btn-warning btn-sm">
                    LogOut
                  </button>
                ) : (
                  <button onClick={login} className="btn btn-success btn-sm">
                    LogIn
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AuthUser;
