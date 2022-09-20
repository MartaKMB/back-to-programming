import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import AdminPage from './AdminPage';
import AdminLoggedPage from './AdminLoggedPage';
import PrivateRoute from './PrivateRoute';

const Home = () => <h1>HOME</h1>;
const News = () => <h1>AKTUALNOŚCI</h1>;
const NotFound = () => <h1>NIE MA TAKIEJ STRONY</h1>

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/">Start</NavLink></li>
            <li><NavLink to="news">Aktualności</NavLink></li>
            <li><NavLink to="contact">Kontakt</NavLink></li>
            <li><NavLink to="dashboard">PANEL ADMINA</NavLink></li>
          </ul>
        </nav>
        <section>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<AdminPage />} />
            <Route path="dashboard" element={<PrivateRoute><AdminLoggedPage /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
