//mnożenie

import { useState } from "react";

export default function Multiply(){
    const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0});

    function changeFirstNumberHandler(event){
        setEnteredNumbers((prevNumbers) => ({
            first: +event.target.value, 
            second: prevNumbers.second,
        }));
    }

    function changeSecondNumberHandler(event){
        setEnteredNumbers((prevNumbers) => ({
            first: prevNumbers.first, 
            second: +event.target.value, //+ to konwertowanie na liczbe
        }));
    }

    const result = enteredNumbers.first * enteredNumbers.second; 
    
    return(
        <p>
            <input type="numer" onChange={changeFirstNumberHandler} /> *{' '}
            <input type="numer" onChange={changeSecondNumberHandler} /> = {result}
        </p>
    );
}