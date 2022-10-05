import './App.css';
import { Provider } from 'react-redux';
import Form from './Form';
import List from './List';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REDUX</h1>
        <h2>Programowanie z Samurajem i Domanem</h2>
        <Form />
        <br />
        <hr />
        <List />
      </div>
    </Provider>

  );
}

export default App;
