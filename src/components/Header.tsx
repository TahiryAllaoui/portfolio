import { useEffect } from 'react';
import '../style/Header.scss';


function Header() {

    const handleScroll = (e: React.MouseEvent<HTMLElement> ) => {
        let id = e.currentTarget.id;
        let element = document.querySelector(id.replace("_", "")) as HTMLElement;
        let aElement = document.querySelectorAll('.Header .assets a') as NodeListOf<HTMLElement>;
        for(let i = 0; i < aElement.length - 1; i++) {
            if( id == aElement[i].id) {
                e.currentTarget.style.backgroundColor = '#FF3333';
            }
            else aElement[i].style.backgroundColor = 'transparent';
        }

        element.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {

    },[])
    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            <div className="assets">
                <a id='#about_' className='links' onClick={handleScroll}>About</a>
                <a id='#skills_' className='links' onClick={handleScroll}>Skills</a>
                <a id='#project_' className='links' onClick={handleScroll}>Projects</a>
                <a id='#contact_' className='links' onClick={handleScroll}>Contact</a>
                <div className='links'>
                    <a href='/hiring' >Hire me</a>
                </div>
            </div>
        </div>
    )
}

export default Header