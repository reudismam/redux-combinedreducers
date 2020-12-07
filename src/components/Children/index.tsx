import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/action';
import { AppState } from '../../redux/types';


const Children:React.FC = (props) => {
    const dispatch = useDispatch();
    const loggedState = useSelector((state:AppState) => state.isLogged);

    return (
        <div>
            {loggedState.logged && 
            <button onClick={()=>dispatch(login())}>Logout</button>}
            {!loggedState.logged && 
            <button onClick={()=>dispatch(login())}>Login</button>}
        </div>
    );
}

export default Children;


