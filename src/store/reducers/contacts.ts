import Contact from "../../models/Contact";
import ContactClass from "../../models/Contact"

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type ContactState = {
    itens: ContactClass[];
}

const initialState: ContactState = {
    itens: [
        {
            id: 1,
            name: "Joao",
            adress: "Rua joao silva",
            mail: "joao@gmail.com"
        }, 
        {
            id: 2,
            name: "Joao",
            adress: "Rua joao silva",
            mail: "joao@gmail.com"
        },
        {
            id: 3,
            name: "Joao",
            adress: "Rua joao silva",
            mail: "joao@gmail.com"
        }, 
        {
            id: 4,
            name: "Joao",
            adress: "Rua joao silva",
            mail: "joao@gmail.com"
        }, 
    ]
}

const SliceTasks = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload),
            ]
        },
        edit: (state, action: PayloadAction<Contact>) => {
            const contactIndex = state.itens.findIndex(
                (c) => c.id === action.payload.id
            );

            if (contactIndex >=0) {
                state.itens[contactIndex] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contact, "id">>) => {
            const contactExists = state.itens.find(
              (contact) =>
                contact.name.toLocaleLowerCase() ===
                action.payload.name.toLocaleLowerCase()
            );
      
            if (contactExists) {
              alert("Já existe uma tarefa com esse nome");
            } else {
              const lastContact = state.itens[state.itens.length - 1];
              const newContact = {
                ...action.payload,
                id: lastContact ? lastContact.id + 1 : 1,
              };
              state.itens.push(newContact);
            }
          },
    }
})

export const { remove, edit, cadastrar } = SliceTasks.actions;

export default SliceTasks.reducer;

