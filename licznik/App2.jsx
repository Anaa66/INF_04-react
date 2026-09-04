//licznik

import React from 'react'; 
import './App.css'; 

export default function App(){
    const [counter, setCounter] = React.useState(0); 
    function incrementCounterHandler(){
        setCounter(prevCounter => prevCounter + 1);
    }
    function decrementCounterHandler(){
        setCounter(prevCounter => (prevCounter> 0 ? prevCounter-1 : prevCounter)); //nie mniejsze niz zero
        //setCounter nie dziala od razu!!!
    }
    return(
        <div>
            <p id='counter'>{counter}</p>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
    );
}
