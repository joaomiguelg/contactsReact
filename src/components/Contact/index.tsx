import ContactClass from '../../models/Contact'
import * as S from './styles'

import { remove, edit } from "../../store/reducers/contacts";

import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


type Props = ContactClass


export const Contact = ({id, name: originalName, tel: originalTel, mail: originalMail}: Props) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [telValue, setTelValue] = useState('');
    const [mailValue, setMailValue] = useState('');
    const [nameValue, setNameValue] = useState('')
    



    
  useEffect(() => {
    if (originalTel.length > 0) {
      setTelValue(originalTel);
    }
  }, [originalTel]);

  useEffect(() => {
    if (originalMail.length > 0) {
      setMailValue(originalMail);
    }
  }, [originalMail]);

  useEffect(() => {
    if (originalName.length > 0) {
      setNameValue(originalName);
    }
  }, [originalName]);


  const cancelEdit = () => {
    setIsEditing(false);
    setTelValue(originalTel);
    setMailValue(originalMail);
    setNameValue(originalName)
  };





    return(
        <S.Contact>
            <S.Title value={nameValue} disabled={!isEditing} onChange={(event) => setNameValue(event.target.value)}></S.Title>
            <p>Telefone:</p>
            <S.Adress value={telValue} disabled={!isEditing} onChange={(event) => setTelValue(event.target.value)}/>
            <p>E-mail:</p>
            <S.Mail value={mailValue} disabled={!isEditing} onChange={(event) => setMailValue(event.target.value)}></S.Mail>
            <div>
            {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name: originalName,
                    tel: originalTel,
                    mail: originalMail,
                  })
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelButton onClick={cancelEdit}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
            </div>
        </S.Contact>
    )
}