import './App.css';
import ProfileImage from './assets/profile-img.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={ProfileImage}
          id="profile__img" 
          alt="logo"
         />
        <h4>Bamidele Efunnuga</h4>     
      </header>
      
    </div>
  );
}

export default App;
