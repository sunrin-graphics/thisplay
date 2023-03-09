
// @ts-nocheck

import React, { useEffect, useState , useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";


import Check from "../assets/check.png"

const Button = styled.div`
  width: ${props => props.width};
  height: 47px;
  background-color: ${props => props.color ? "rgba(51, 37, 31, 0.8)" : "rgba(51, 37, 31, 0.2)"};
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  /* ${props => props.loading ? "background-color: rgba(51, 37, 31, 0.2)" : "background-color: rgba(51, 37, 31, 0.8)"}; */
`

const Img = styled.div`
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(${Check});
  margin-left: 8px;
`

const ButtonComponent = (props) => {

  const handleClick = () => {
    props.onIncrement()
  }
  
  return (
    <Button
      width={props.width}
      color={props.color}
      onClick={handleClick}
      loading={props.loading}
    >
      {props.title}
      <Image
        src={Check}
        width={20}
        height={20}
        style={{ marginLeft: "6px" }}
        alt="edit"
      />
    </Button>
  )
}

export default ButtonComponent