import '../style/About.scss';
import reactLogo from '../assets/images/react-logo.png';

function About({ className }: { className: string }) {
    return (
        <div className={`About ${className}`} id='about'>
            <div className="description">
                <p>Hello! I am</p>
                <h1>Tahiry <br />
                    <span>Allaoui</span></h1>
                <p>A young <span><img src={reactLogo} /> React </span>developer passionate about Japanese Culture and Technologies,
                    especially Artificial Intelligence and Emulations.</p>
            </div>
            <div className='profile'></div>
        </div>
    )
}

export default About