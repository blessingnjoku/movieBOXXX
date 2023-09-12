import { styled } from "styled-components";

export const CardStyle = styled.div`

  max-width: 100%;
  display: flex;
  justify-content:space-between;
  padding:2% 9rem;
  /* gap: 40px; */
  flex-wrap: wrap;
 
  /* > div {
    flex: 1;
  } */
  @media (max-width: 769px) {
    flex-direction: column;
    gap: 20px;
  }
`;