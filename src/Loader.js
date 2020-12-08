import React from 'react';

const Loader = (props) => {

  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Sets prop for loader in case no prop is passed
Loader.defaultProps = {
  message: 'Loading...'
};

export default Loader;