//images import from assets folder
import ProfileImage from '../../assets/profile-img.jpeg'

const ProfileDetail = () => {
    return(
        <header className="App-header">
            <img 
                src={ProfileImage}
                id="profile__img" 
                alt="logo"
            />
            <h4>Bamidele Efunnuga</h4>     
      </header>
    )
}

export default ProfileDetail;