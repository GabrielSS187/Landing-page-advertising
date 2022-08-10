import Close from "../../assets/svg/Close";

import { Container, ChildrenContainer } from "./styles";

interface PropsSuccessModal {
  setIsActiveModal: ( value: boolean ) => void;
};

export const SuccessModal = ({ setIsActiveModal }: PropsSuccessModal) => {
  return (
    <Container>
      <ChildrenContainer>
        <div>
          <button onClick={() => setIsActiveModal(false)}>
          <Close />
          </button>
        </div>
        <h3>Cadastro realizado com sucesso!</h3>
      </ChildrenContainer>
    </Container>
  );
};