//components
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.components';
import ProfileDetail from '../../components/profile-detail/profile-detail.component';
import SocialLinks from '../../components/social-links/social-links.component';

const Home = () => {
    return(
        <>
            <ProfileDetail />
            <Navigation />
            <SocialLinks />
            <Footer />
        </>
    )
}

export default Home;