import React from "react";
import styled from "styled-components";
import "./style.scss";
const InputStyle = styled("input")``;

interface Props {
  onChange: (e: string) => void;
  value: string;
}

const Input = (props: Props) => {

    const {value} = props

  const handleChange = (e: any) => {
    props.onChange(e);
  };

  return <InputStyle className="input" onChange={handleChange} />;
};

export default Input;
