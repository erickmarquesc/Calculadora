import styled from "styled-components";

export const KeyboardContainer = styled.div`
  gap: 12px;
  display: flex;
  padding: 26px 32px 32px;
  flex-direction: column;

  .operatorrow{
    gap: 12px;
    display: flex;
    flex-direction: row;
  }
  .operatorcolumn{
    gap: 12px;
    display: flex;
    flex-direction: column;
  }

  .secondary {
    color: #975dfa;
  }

  .tertiary {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%,
     rgba(255, 255, 255, 0.05) 100%), #462878;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }

  .quartiary {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
  }
`;

export const KeyboardContainerTerms = styled.div`
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const KeyboardContent = styled.div`
  gap: 12px;
  display: flex;
`;