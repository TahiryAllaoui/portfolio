import '../style/Header.scss';


function Header() {
    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            <div className="assets">
                <a href='#About' className='links'>About</a>
                <a href='/projects' className='links'>Projects</a>
                <a href='/contact' className='links'>Contact</a>
                <div className='links'>
                    <a href='/hiring' >Hire me</a>
                </div>
            </div>
        </div>
    )
}

export default Header