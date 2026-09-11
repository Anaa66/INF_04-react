import { useState } from "react"

function App(){
    const [numbers, setNumbers] = useState({ firstElem: 0, secElem:0});
    const [operation, setOperation] = useState('+');

    function firstElemSet(e){ 
        setNumbers((prevNumbers) => ({
            firstElem: +e.target.value, 
            secElem: prevNumbers.secElem,
        }));
    }

    function secElemSet(e){
        setNumbers((prevNumbers) => ({
            firstElem: prevNumbers.firstElem, 
            secElem: +e.target.value,
        }));
    }

    function operatorSet(e){
        setOperation(e.target.value)
    }

    const result = eval(numbers.firstElem + operation + numbers.secElem)

    return(
        <>
            <div>
                <input type="number" onChange={firstElemSet}></input>
                <select onChange={operatorSet}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input type="number" onChange={secElemSet}></input>
            </div>
            <br/>
            <p>Wynik: {result}</p>
        </>
    )
}

export default App