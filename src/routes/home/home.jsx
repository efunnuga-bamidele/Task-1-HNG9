//components
import Navigation from '../../components/navigation/navigation.components';
import ProfileDetail from '../../components/profile-detail/profile-detail.component';
import SocialLinks from '../../components/social-links/social-links.component';

const Home = () => {
    return(
        <div className="App">
            <ProfileDetail />
            <Navigation />
            <SocialLinks />
        </div>
    )
}

export default Home;