import '../style/Project.scss';
import space from '../assets/images/Space.png';
import rps from '../assets/images/Rps.jpg';
import cards from '../assets/images/cards.jpg';
import country from '../assets/images/Country.jpg';
import homepage from '../assets/images/Homepage.jpg';
import multiform from '../assets/images/multiform.jpg';

interface Project {
    bg: string;
    name: string;
    description: string;
    link: string;
    git: string;
}


function Project({ className }: { className: string }) {
    let projetcItems: Project[] = [{
        bg: cards,
        name: 'Interactive card details',
        description: 'Enter your datas in a form and see them being rendered dynamically',
        link: 'https://interactive-card-details-fem.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Interactive-Card-Details'
    }, {
        bg: country,
        name: 'REST Countries API',
        description: 'Scroll trough all countries detail with a Color Theme Switcher',
        link: 'https://countries-api-fem-site.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Rest-country-API'
    }, {
        bg: homepage,
        name: 'News homepage',
        description: 'A landing page template for a News, a Blog,...',
        link: 'https://homepage-component-fem.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Homepage-component'
    }, {
        bg: multiform,
        name: 'Multi-step form',
        description: 'Template for a Subcription form',
        link: 'https://multi-form-fem.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Results-Summary-Component'
    }, {
        bg: rps,
        name: 'Rock-Paper-Scissors',
        description: 'Wanna chill a bit? Here\' s a little basic game',
        link: 'https://rock-paper-scissors-fem-site.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Rock-paper-scissors'
    }, {
        bg: space,
        name: 'Space tourism',
        description: 'A multi-page webstie about a trip to the space',
        link: 'https://space-tourism-site-fem.netlify.app/',
        git: 'https://github.com/TahiryAllaoui/Space-tourism'
    }];
    
    return (
        <div className={`Project ${className}`} id='project'>
            <h2>Projects:</h2>
            <div className="container">
                {projetcItems.map((item) => <div key={item.name} className='project-cards'>
                    <div className="bg" style={{ backgroundImage: `url(${item.bg})` }}></div>
                    <div className="detail">
                        <div className="detail-list">
                            <h2 className="project-name">{item.name}</h2>
                            <div className="project-description">{item.description}</div>
                        </div>
                    </div>
                    <div className="link-container">
                        <a className="preview" href={`${item.link}`}>Preview</a>
                        <a className='git' href={`${item.git}`}>View code</a>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Project;