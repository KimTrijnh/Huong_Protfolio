import React from "react";

const Avatar = props => {
  return (
    <div className="mr-2">
      <button className="btn-link btn btn-primary">
        <img src="https://avatars1.githubusercontent.com/u/26478993?v=4" width="30" height="30" alt="avatar" className="mr-2 img-fluid rounded-circle shadow"/>
         {props.text}
      </button>
    </div>
  );
};

export default Avatar;
