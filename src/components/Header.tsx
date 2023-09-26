import '../style/Header.scss';


function Header() {
    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            <div className="assets">
                <a href='/' className='links'>About</a>
                <a href='/projects' className='links'>Projects</a>
                <a href='/contact' className='links'>Contact</a>
                <a href='/hiring' className='links'>Hire me</a>
            </div>
        </div>
    )
}

export default Header