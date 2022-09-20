import { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

// const data = [
//   { id: 1, title: 'Wiadomość 1', body: 'Zawartość wiadomości nummer 1' },
//   { id: 2, title: 'Wiadomość 2', body: 'Zawartość wiadomości nummer 2' },
// ];

// setInterval(() => {
//   const index = data.length + 1;
//   data.push({
//     id: index,
//     title: `Wiadomość ${index}`,
//     body: `Zawartość wiadomości numer ${index}`,
//   });
// }, 9000);

function App() {
  const [comments, setComment] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const displayedComments = comments.map(comment => (
    <Message key={comment.id} displayedComment={comment} />
  ));

  useEffect(() => {
    // const getData = () => comments.length !== data.length ?
    //   setComment([...data]) :
    //   console.log('dane takie same');

    // const interval = setInterval(() => {
    //   getData();
    // }, 6000);

    // return () => clearInterval(interval);
    const fetchData = () => fetch('data/messages.json')
      .then(response => response.json())
      .then(result => {
        setComment(result.messages);
        setIsLoaded(true);
      });

    setTimeout(fetchData, 3000);

  }, []);

  return (
    <div className="App">
      {!isLoaded ? 'wczytuję dane' : displayedComments.reverse()}
    </div>
  );
}

export default App;
