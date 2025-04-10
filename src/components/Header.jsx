import logo from '/logo-name.png'

function Header() {
    const now = new Date()

    return (
        <header>
            <div className="logo">
                <img src={logo} alt={'Result'} />
            </div>
            <div className="menu">
                <p>Время сейчас: 
                    {now.toLocaleTimeString()}
                </p>
            </div>
        </header>
    )
}
export default Header