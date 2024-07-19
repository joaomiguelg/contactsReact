import { Contact } from "../../components/Contact"
import { RootReducer } from "../../store";
import { ListContainer } from "./styles"
import { useSelector } from "react-redux";

const List = () => {
    const { itens } = useSelector((state: RootReducer) => state.contacts);
    const { term } = useSelector(
        (state: RootReducer) => state.filter
    )

    const filterContact = () => {
        let tasksFiltered = itens;
        if (term !== undefined) {
          tasksFiltered = tasksFiltered.filter(
            (iten) => iten.name.toLowerCase().search(term.toLocaleLowerCase()) >= 0
          );
          return tasksFiltered;
        } else {
          return itens;
        }
      };


    const contact = filterContact()
    return (
        <ListContainer>
            <ul>
                {contact.map((c) => (
                    <li key={c.id}>
                        <Contact id={c.id} name={c.name} tel={c.tel} mail={c.mail} />
                    </li>
                ))}
            </ul>   
        </ListContainer>
    )
}

export default List