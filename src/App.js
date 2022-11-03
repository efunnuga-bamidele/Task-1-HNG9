import { Routes, Route} from 'react-router-dom';

//Styles
import './App.css';

//components
import Home from './routes/home/home';
import Contact from './routes/contact/contact';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <div className="footer_component">
          <Footer />
        </div>
    </div>
  );
}

export default App;
