import './Header.scss';

const Header = () => {
    return (
        <header className='Header'>
            <div className='contents'>
                <div>
                    로고자리
                </div>

                <nav className='navigation'>
                    <ul>
                        <li>
                            메뉴1
                        </li>
                        <li>
                            메뉴2
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;