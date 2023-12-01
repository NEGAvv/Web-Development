import React from "react";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";

const loaderStyle = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => {
  return <RingLoader color="#1890ff" css={loaderStyle} size={25} />;
};

export default Loader;
