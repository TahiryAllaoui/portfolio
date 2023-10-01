import '../style/Header.scss';


function Header() {
    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            <div className="assets">
                <a href='#about' className='links'>About</a>
                <a href='#skills' className='links'>Skills</a>
                <a href='#project' className='links'>Projects</a>
                <a href='#contact' className='links'>Contact</a>
                <div className='links'>
                    <a href='/hiring' >Hire me</a>
                </div>
            </div>
        </div>
    )
}

export default Header