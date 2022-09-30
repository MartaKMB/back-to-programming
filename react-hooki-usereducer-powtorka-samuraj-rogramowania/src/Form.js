import { useState } from "react";

const Form = ({ addHandler }) => {
    const [inputData, setInputData] = useState('');

    const hanldeOnChange = (e) => setInputData(e.target.value);
    const handleOnClick = () => {
        const course = {
            id: Math.floor(Math.random() * 1000),
            title: inputData,
        };
        addHandler({ type: 'ADD', course });
        setInputData('');
    }

    return (
        <div>
            <input type='text' onChange={hanldeOnChange} value={inputData} />
            <button onClick={handleOnClick}>Dodaj kurs</button>
        </div>
    );
};

export default Form;