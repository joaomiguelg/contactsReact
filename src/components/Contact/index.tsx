import ContactClass from '../../models/Contact'
import * as S from './styles'

import { remove, edit } from "../../store/reducers/contacts";

import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


type Props = ContactClass


export const Contact = ({id, name, adress: originalAdress, mail: originalMail}: Props) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [addresValue, setAddresValue] = useState('');
    const [mailValue, setMailValue] = useState('');
    



    
  useEffect(() => {
    if (originalAdress.length > 0) {
      setAddresValue(originalAdress);
    }
  }, [originalAdress]);

  useEffect(() => {
    if (originalMail.length > 0) {
      setMailValue(originalMail);
    }
  }, [originalMail]);


  const cancelEdit = () => {
    setIsEditing(false);
    setAddresValue(originalAdress);
    setMailValue(originalMail)
  };





    return(
        <S.Contact>
            <S.Title>{name}</S.Title>
            <p>Endereço:</p>
            <S.Adress value={addresValue} disabled={!isEditing} onChange={(event) => setAddresValue(event.target.value)}/>
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
                    name,
                    adress: originalAdress,
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