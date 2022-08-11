import styled from "styled-components";

interface ContainerProps {
  isActiveModal: boolean;
};

export const Container = styled.main<ContainerProps>`
    padding: 50px;
    padding-bottom: 50px;
    color: #fff;
    background-color:
     ${({isActiveModal}: ContainerProps) => isActiveModal ? "rgba(0, 0, 0, 0.5)": "normal"};

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