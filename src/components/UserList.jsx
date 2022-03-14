import React, { useEffect, useState } from 'react';

function UserList() {
  let [state, setstate] = useState({
    users: [],
  });

  useEffect(() => {});

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">User List</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              illum numquam quaerat ipsum, quo id illo nobis ullam alias
              voluptate officiis corporis harum dolore? Suscipit, harum. Commodi
              similique quaerat a!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserList;
