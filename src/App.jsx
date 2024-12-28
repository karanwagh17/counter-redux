import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCounter,subToCounter } from './redux/Action';

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(addToCounter(1))}>Increment</button>
          
            <button onClick={() => dispatch(subToCounter(1))}>Decrement</button>
        </>
    );
}

export default App;
