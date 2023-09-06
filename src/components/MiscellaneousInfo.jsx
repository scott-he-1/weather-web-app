import React from "react";
import styled from "styled-components";

const MiscellaneousContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  &:hover {
    background: rgba(128, 128, 128, 0.4);
    border-left: 1px solid rgba(128, 128, 128, 0.5);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Category = styled.div`
  @media (min-width: 1024px) {
    margin-right: auto;
  }
`;
const CategoryData = styled.div``;
const CategoryDescription = styled.div`
  font-size: 12px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const MiscellaneousInfo = ({ name, description, image, info }) => {
  return (
    <MiscellaneousContainer>
      {image}
      <FlexContainer>
        <Category>{name}</Category>
        <CategoryData>{info}</CategoryData>
      </FlexContainer>
      <CategoryDescription>{description}</CategoryDescription>
    </MiscellaneousContainer>
  );
};
