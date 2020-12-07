import React, {useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../../redux/action';
import { AppState, LoggedState } from '../../redux/types';
import Children from '../Children';

const Parent:React.FC = (props)  => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const counter = useSelector((state:AppState) => state.counter);
    const logged = useSelector((state:AppState) => state.isLogged);
    return (
        <>
        {
        logged.logged &&
        <div>
            <h1>Contador {counter.counter}</h1>
            
            <button onClick={() => dispatch(increment(value))}>+</button>
            <input 
                type="number"
                value={value}
                onChange={(e)=>setValue(Number(e.target.value))}
                />
            <button onClick={() => dispatch(decrement(value))}>-</button>
        </div>
        }
        <Children />
        </>
    )
}

export default Parent;