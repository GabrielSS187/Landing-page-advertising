import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
  /* height: 100vh; */
  /* background: rgba(0, 0, 0, 0.4); */
  
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const ChildrenContainer = styled(motion.div)`
  height: 60vh;
  width: 70%;
  color: #fff;
  background-color: #ffc40c;
  border-radius: 10px;

  > div {
    display: flex;
    justify-content: flex-end;
    padding: 10px;

    > button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }

  > h1 {
      height: 70%;
      font-size: 50px;
      font-weight: 700;

      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
`;