import { Routes, Route} from 'react-router-dom';

//Styles
import './App.css';

//images import from assets folder
import ProfileImage from './assets/profile-img.jpeg'
import Slack from './assets/icons8_slack_new.svg'
import Github from './assets/icons8_github.svg'
import Contact from './routes/contact/contact';

//components
import Footer from './components/footer/footer.component';
import Navigation from './components/navigation/navigation.components';
import ProfileDetail from './components/profile-detail/profile-detail.component';

function App() {
  return (
    <div className="App">
      <ProfileDetail />
      <Navigation />
      <div className='icon__list'>
        <a href="">
          <img src={Slack} id='twitter' alt="slack-icon" width='24' height='24' />
        </a>
        <a href="https://github.com/efunnuga-bamidele" target="_blank">
          <img src={Github} id='slack' alt="github-icon" width='24' height='24'/>
        </a>
    </div>
      <Footer />
    </div>
  );
}

export default App;
