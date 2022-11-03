import { Routes, Route} from 'react-router-dom';

//Styles
import './App.css';

//components
import Home from './routes/home/home';
import Contact from './routes/contact/contact';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
