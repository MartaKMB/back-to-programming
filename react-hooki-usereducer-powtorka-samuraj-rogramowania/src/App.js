import { useEffect, useReducer } from 'react';
import CourseInfo from './CourseInfo';
import './App.css';
import Form from './Form';

const samurajProgramowaniaCourses = [
  {
    id: '1',
    title: 'Web developer od podstaw w 15 dni',
  },
  {
    id: '2',
    title: 'Zaawansowany front-end w 15 dni',
  },
  {
    id: '3',
    title: 'Programowanie w JS',
  },
  {
    id: '4',
    title: 'React od podstaw',
  },
  {
    id: '5',
    title: 'Backend Node.js',
  },
  {
    id: '6',
    title: 'Zaawansowane projekty w CSS i JS',
  },
];

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.course];
    case 'REMOVE':
      return state.filter(course => course.id !== action.id);
    case 'FETCH':
      return action.data;
    default:
      throw new Error('Ooops! Nie znaleziono akcji typu: ', action.type);
  }
};

const fetchAsyncData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
};

function App() {
  const [state, dispatch] = useReducer(coursesReducer, []);

  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: 'FETCH', data: samurajProgramowaniaCourses });
  }

  useEffect(() => {
    asyncFetch();
  }, []);

  const coursesElements = state.map(course => (
    <CourseInfo
      key={course.id}
      {...course}
      onClickHandler={dispatch}
    />
  ))

  return (
    <div className="App">
      {coursesElements}
      <br />
      <hr />
      <Form addHandler={dispatch} />
    </div>
  );
}

export default App;
