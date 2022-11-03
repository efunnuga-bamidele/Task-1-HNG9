

//images import from assets folder
import Slack from '../../assets/icons8_slack_new.svg'
import Github from '../../assets/icons8_github.svg'


const SocialLinks = () => {
    return (
        <div className='icon__list'>
            <a href="">
            <img src={Slack} id='twitter' alt="slack-icon" width='50' height='50' />
            </a>
            <a href="https://github.com/efunnuga-bamidele" target="_blank">
            <img src={Github} id='slack' alt="github-icon" width='50' height='50'/>
            </a>
        </div>
    )
}
export default SocialLinks;