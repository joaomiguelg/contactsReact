import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterTerm } from '../../store/reducers/filters'

export const Filters = () => {

    const dispatch = useDispatch()
   const { term } = useSelector((state: RootReducer) => state.filter)

    return <S.Input placeholder='Procurar' type='text' value={term} onChange={(event) => dispatch(alterTerm(event.target.value))}/>
    
}