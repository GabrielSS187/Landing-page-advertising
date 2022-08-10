import styled from "styled-components";

export const Container = styled.main`
    padding: 50px;
    padding-bottom: 50px;
    color: #fff;

   > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   }

  > div h1 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: 700;
  }

  > div p {
    font-weight: 400;
    font-size: clamp(.700rem, 1vw, 1rem);;
  }

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;