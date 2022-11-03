import { Link } from "react-router-dom";

const Navigation = () => {
    return(

        <div className="links__section">
            <a
                className="App-link"
                id='twitter'
                href="https://twitter.com/BamideleEfunnu2"
            >
                Twitter Link
            </a>
                <a
                className="App-link"
                id='btn__zuri'
                href="https://training.zuri.team/"
                >
                Zuri Team
                </a>
                <a
                className="App-link"
                id='books'
                href="http://books.zuri.team"
                >
                Zuri Books
                </a>
                <a
                className="App-link"
                id='book__python'
                href={`https://books.zuri.team/python-for-beginners?ref_id=@ebamidele`}
                >
                Python Books
                </a>
                <a
                className="App-link"
                id='pitch'
                href="https://background.zuri.team"
                >
                Background Check for Coders
                </a>
                <a
                    className="App-link"
                    id='book__design'
                    href="https://books.zuri.team/design-rules"
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