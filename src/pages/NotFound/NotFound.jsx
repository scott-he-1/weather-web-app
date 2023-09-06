import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const HomeButton = styled.button`
  width: 100px;
  height: 100px;
`;

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <FlexColumnContainer>
      <div>Page not found</div>
      <HomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </HomeButton>
    </FlexColumnContainer>
  );
};
