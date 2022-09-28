import { createRef, useState, useRef, useEffect } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const textInput = useRef(true);
  const numberInput = createRef();

  const paragraphElement = useRef();

  console.log('useRef: ', textInput);
  console.log('createRef: ', numberInput);
  // useRef moze mieć przypisaną wartość
  // createRef ma na starcie null
  // useRef przy kadym przerenderowaniu zwraca tą samą referencję bez zmian podczas zycia komponentu
  // createRef zmienia się przy przerenderowywaniu

  const [counter, setCounter] = useState(0);

  const [isCounterVisible, setIsCounterVisible] = useState(true);

  useEffect(() => {
    textInput.current.focus();
  }, [])

  const focusTextInput = () => textInput.current.focus();
  const focusNumberInput = () => numberInput.current.focus();
  const increaseCounter = () => setCounter(counter + 1);

  const addChar = () => paragraphElement.current.textContent += '!';
  const toggleVisibilityCounter = () => setIsCounterVisible(prevState => !prevState);

  const counterElement = isCounterVisible ? <Counter /> : null;

  return (
    <div className="App">
      <input
        ref={textInput}
        type="text"
      />
      <button onClick={focusTextInput}>Ustaw focus na input text</button>
      <br />
      <input
        ref={numberInput}
        type="number" />
      <button onClick={focusNumberInput}>Ustaw focus na input number</button>
      <br />
      <button onClick={increaseCounter}>Przerenderuj</button>
      <p ref={paragraphElement}>Hello!</p>
      <button onClick={addChar}>Dodaj wykrzyknik</button>
      <hr />
      <button onClick={toggleVisibilityCounter}>Pokaz/Ukryj Counter</button>
      {counterElement}
    </div>
  );
}

export default App;
