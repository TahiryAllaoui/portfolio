import { SlClose, SlMenu } from 'react-icons/sl';
import '../style/Header.scss';
import { useState } from 'react';


function Header() {
    let body = document.querySelector('body') as HTMLElement;
    const handleScroll = (e: React.MouseEvent<HTMLElement> ) => {
        let id = e.currentTarget.id;
        let element = document.querySelector(id.replace("_", "")) as HTMLElement;
        let aElement = document.querySelectorAll('.Header .assets a') as NodeListOf<HTMLElement>;
        for(let i = 0; i < aElement.length - 1; i++) {
            if( id == aElement[i].id && body.clientWidth > 768) {
                e.currentTarget.style.backgroundColor = '#FF3333';
            }
            else aElement[i].style.backgroundColor = 'transparent';
        }

        element.scrollIntoView({behavior: 'smooth'});
    };
    const [clicked, setClicked] = useState(false);
    const handleOpen = () => {
        let assets = document.querySelector('.Header .assets') as HTMLElement;
        let app = document.querySelector('.app') as HTMLElement;
if(body.clientWidth <= 428) {
    assets.style.left = '40%';
}
else if(body.clientWidth > 428 && body.clientWidth <= 768) {
    assets.style.left = '75%';
}   
    
        app.style.overflow = 'hidden';
        setTimeout(()=> {
            if(body.clientWidth <= 428) {
                assets.style.boxShadow = '-10rem 0 50px 15px rgba(0,0,0,0.5)';
            }
            else if(body.clientWidth > 428 && body.clientWidth <= 768) {
                assets.style.boxShadow = '-50rem 0 50rem 15px rgba(0,0,0,0.5)';
            } 
            setClicked(!clicked);
        },100)
    };
    const handleClose = () => {
        let assets = document.querySelector('.Header .assets') as HTMLElement;
        assets.style.left = '100%';
        let app = document.querySelector('.app') as HTMLElement;

        app.style.overflowY = 'auto';

        setTimeout(()=> {
            assets.style.boxShadow = 'none';
            setClicked(!clicked);
        },50) 
    };

    return (
        <div className='Header'>
            <h2>Portfolio</h2>
            {!clicked ? < SlMenu className='menu' style={{display: body.clientWidth <= 768 ? 'block' : 'none'}} onClick={handleOpen} /> : 
                <SlClose className='close' style={{display: body.clientWidth <= 768 ? 'block' : 'none', zIndex: '2'}} onClick={handleClose}/>
            }
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