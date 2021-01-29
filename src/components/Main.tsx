import { memo } from "react";

const Main = ({ style }) => {
  return <div style={style}>yo!</div>;
};

export default memo(Main);
