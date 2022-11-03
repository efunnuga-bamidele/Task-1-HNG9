
//Images
import FooterImg from '../../assets/footer-img.PNG'

const Footer = () => {
    return (
        <footer className='footer__section'>
            <p id='left__item'>Zuri<span>.</span>Internship</p>
            <p id='center__item'>HNG Internship 9 Frontend Task</p>
            <img id='right__item' src={FooterImg} alt="footer" />
        </footer>
    )
}
export default Footer;