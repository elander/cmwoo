import React, { Fragment, useState } from "react";

import { Button } from "../index";
import styled from "styled-components";

interface Props {
  name: string;
  price: string;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductCardInfo = (props: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    props.onClickFunction(e);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <Wrapper>
      <SpanContainer>
        <span>{props.name}</span>
        <span>--</span>
        <span>SEK{props.price}</span>
      </SpanContainer>
      <Fragment>
        <Button onClickFunction={handleClick} isClicked={isClicked}>
          Lägg i varukorg
        </Button>
      </Fragment>
    </Wrapper>
  );
};

export default ProductCardInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-top: 5%;
  padding-bottom: 7%;
`;

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    display: flex;
    align-items: center;
  }
`;
