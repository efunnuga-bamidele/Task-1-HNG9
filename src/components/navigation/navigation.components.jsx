import { Link } from "react-router-dom";

const Navigation = () => {
    return(

        <div className="links__section">
            <a
                className="App-link"
                id='twitter'
                href="https://twitter.com/BamideleEfunnu2"
                target="_blank"
            >
                Twitter Link
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
                <Link
                    className="App-link"
                    id='contact'
                    to="/contact"
                    >
                    Contact Me
                </Link>
                
        </div>

    )
}

export default Navigation;