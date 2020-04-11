import React from "react";
import styled from "styled-components";
import "./style.scss";
import {Color} from "../../../helpers/colors";

interface Props {
  color?: string;
  label?: string;
  fontSize?: number;
}

const ButtonWrapper = styled("div")`
  background: ${(props: Props) => (props.color ? props.color : Color.primary)};
`;
const Label = styled("span")`
  font-size: ${(props: Props) => (props.fontSize ? props.fontSize : 14)}px;
`;

const Button = (props: Props) => {
  const { label, color, fontSize } = props;

  return (
    <ButtonWrapper color={color} className="btn">
      <Label className='btn_label' fontSize={fontSize}>{label ? label : "Text"}</Label>
    </ButtonWrapper>
  );
};
export default Button;
