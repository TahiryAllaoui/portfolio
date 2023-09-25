import { Link } from 'react-router-dom';
import '../style/Header.scss';


function Header() {
    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            <div className="assets">
                <Link to='/' className='links'>About</Link>
                <Link to='/projects' className='links'>Projects</Link>
                <Link to='/contact' className='links'>Contact</Link>
                <Link to='/hiring' className='links'>Hire me</Link>
            </div>
        </div>
    )
}

export default Header