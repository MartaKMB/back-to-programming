import { useRef, useState } from "react";

const Counter = () => {
    const componentRef = useRef();
    const [counter, setCounter] = useState(0);

    const asyncIncreaseCounterValue = () => setTimeout(
        () => { componentRef.current && setCounter(prevState => prevState + 1) }, 3000
    )

    return (
        <div ref={componentRef}>
            <p>Wartość licznika wynosi: {counter}</p>
            <button onClick={asyncIncreaseCounterValue}>Pobierz asynchroniczne dane</button>
        </div>
    )
};

export default Counter;