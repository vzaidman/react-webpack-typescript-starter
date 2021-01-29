import * as React from "react";

const Main = ({ style }) => {
  return <div style={style}>yo!</div>;
};

export default React.memo(Main);
