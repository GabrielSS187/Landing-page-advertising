import { useState } from "react";

import { useForm } from "../../../hooks/useForm";

import InputMask from "react-input-mask";

import { container, item } from "../../../assets/animations/animation";
import { motion } from "framer-motion";

import { ButtonsStyle } from '../../ButtonsStyle';

import { SingleInput } from "../../singleInput";

import { FormContainer, SelectContainer } from './styles';

export const FormCadaster = () => {

  const [ errors, setErrors ] = useState<string>("");

  const { form, onChange, clearInputs } = useForm({
    name: "",
    email: "",
    tax_id: "",
    password: "",
    password_confirmation: "",
    company: "",
    segment: "",
  });

  const clearSpecialCharacters = ( value: string ) => {
    return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  };

  const onSubmitRequest = async () => {
    try {
      
    } catch (error: any) {
      console.log(error?.message);
    };
  };

    return (
        <FormContainer onSubmit={() => {}}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <SingleInput>
            <input type="text" id="name" className="input"
                placeholder="Nome"
                name="name"
                value={form.name}
                onChange={onChange}
                required 
              />
            <label htmlFor="name" id="label-name">Nome</label>
          </SingleInput>

          <motion.div className="container-responsively" variants={item}>
            <div>
              <SingleInput>
                <InputMask mask="999.999.999-99" type="text" id="cpf" 
                  className="input" 
                  name="tax_id"
                  value={form.tax_id}
                  onChange={onChange}
                  required 
                 />
                <label htmlFor="cpf">CPF</label>
              </SingleInput>

              <SingleInput>
                <input type="password" id="password" className="input"
                  placeholder="Digite sua senha" 
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  required 
                />
                <label htmlFor="password">Senha</label>
              </SingleInput>

              <SingleInput>
                <input type="text" id="company" className="input"
                  placeholder="Empresa"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  required 
                />
                <label htmlFor="company">Empresa</label>
              </SingleInput>
            </div>

            <motion.div >
              <SingleInput>
                  <input type="email" id="email" className="input" 
                    placeholder="E-mail" 
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                    title="O email não segue o padrão correto"
                    required 
                    />
                  <label htmlFor="email">E-mail</label>
                </SingleInput>
        
                <SingleInput>
                  <input type="password" id="password_confirmation" className="input"
                    placeholder="Confirme sua senha" 
                    name="password_confirmation"
                    value={form.password_confirmation}
                    onChange={onChange}
                    required 
                  />
                  <label htmlFor="password_confirmation">Senha</label>
                </SingleInput>

                <SelectContainer>
                  {/* <div> */}
                    <label htmlFor="segment">Classifição</label>
                  {/* </div> */}
                    <select id="segment" required
                      name="segment"
                      value={form.segment}
                      onChange={onChange}
                    >
                      <option defaultValue="">Escolha sua categoria</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Revendedor">Revendedor</option>
                      <option value="Distribuidor">Distribuidor</option>
                    </select>
                  </SelectContainer>
                  <br /> <br />
              </motion.div>
          </motion.div>  
          {/* container-responsively */}
          <ButtonsStyle>
            <button type="submit">ENVIAR</button>
          </ButtonsStyle>
        </FormContainer>
    );
  
};