import { FormCadaster } from "../../shared/components/forms/formCadaster";

import { Container } from "./styles";

export const Cadaster = () => {
  return (
    <Container>
      <div>
        <h1>CADASTRE-SE</h1>
        <div>
          <p>Preencha os campos abaixo para validar sua participação</p>
          <p>na campanha e concorrer aos prêmios.</p>
        </div>
      </div>
      <FormCadaster/>
    </Container>
  );
};