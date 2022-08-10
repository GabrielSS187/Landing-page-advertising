import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);;
  
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const ChildrenContainer = styled.div`
  width: 70%;
  color: #fff;
  background-color: #ffc40c;
`;