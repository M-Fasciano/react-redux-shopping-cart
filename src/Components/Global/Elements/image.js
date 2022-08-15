import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../devices";

const Image = styled.img`
  display: inline-block;
  height: 100vh;
  object-fit: cover;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`;

const image = (props) => {
  return (
    <>
      <Image src={props.url} alt={props.alt} />
    </>
  );
};

image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default image;
