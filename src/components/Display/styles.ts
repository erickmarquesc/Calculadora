import styled from "styled-components";

export const DisplayContainer = styled.div`
  
  padding-inline: 54px;

  #last-calc {
    color: #6b6b6b;
    font-size: 20px;
    padding-top: 54px;
    text-align: right;
    line-height: 140%;

    label{
      margin: 5px;
    };
  };
`;

export const ResultSection = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;

  span {
    color: #ebebeb;
    font-size: 36px;
    line-height: 140%;
  };
`;