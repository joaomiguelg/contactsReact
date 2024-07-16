import { FormEvent, useState } from "react";

import { SaveButton } from "../Contact/styles";
import { StyledForm } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cadastrar } from "../../store/reducers/contacts";

export const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitTask = (event: FormEvent) => {

    event.preventDefault()
    
    dispatch(cadastrar({
      name, mail, adress
    }))
    navigate('/')
  }

  return (
    <>
      <h2>Novo Contato</h2>
      <StyledForm onSubmit={submitTask}>
        <textarea
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome do Contato"
        
        />
        <textarea
          value={adress}
          onChange={(event) => setAdress(event.target.value)}
          placeholder="Endereço"
        />
        <textarea
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          placeholder="Email"
        />
        <SaveButton type="submit">Cadastrar</SaveButton>
      </StyledForm>
    </>
  );
};