//Styles
import './App.css';

//images import from assets folder
import ProfileImage from './assets/profile-img.jpeg'
import Slack from './assets/icons8_slack_new.svg'
import Github from './assets/icons8_github.svg'
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
      <div className="links__section">
            <a
            className="App-link"
            id='twitter'
            href="https://twitter.com/BamideleEfunnu2"
            target="_blank"
          >
            Twitter link
          </a>
            <a
              className="App-link"
              id='btn__zuri'
              href="https://training.zuri.team/"
              target="_blank"
            >
              Zuri Team
            </a>
            <a
              className="App-link"
              id='books'
              href="http://books.zuri.team"
              target="_blank"
              rel="noopener noreferrer"
            >
            Zuri Books
            </a>
            <a
              className="App-link"
              id='book__python'
              href={`https://books.zuri.team/python-for-beginners?ref_id=@ebamidele`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Books
            </a>
            <a
              className="App-link"
              id='pitch'
              href="https://background.zuri.team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Background Check for Coders
            </a>
            <a
            className="App-link"
            id='book__design'
            href="https://books.zuri.team/design-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design Books
          </a>
      </div>
      <div className='icon__list'>
        <a href="">
          <img src={Slack} id='twitter' alt="slack-icon" width='24' height='24' />
        </a>
        <a href="https://github.com/efunnuga-bamidele" target="_blank">
          <img src={Github} id='slack' alt="github-icon" width='24' height='24'/>
        </a>
    </div>
    </div>
  );
}

export default App;
