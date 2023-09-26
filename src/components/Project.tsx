import '../style/Project.scss';
import space from '../assets/images/Space.png';

function Project() {
    return (
        <div className="Project">
            {[0, 1, 2, 3, 4, 5].map(() => <div className='project-cards'>
                <div className="bg" style={{ backgroundImage: `url(${space})` }}></div>
                <div className="project-name">Name</div>
                <div className="project-link">Link</div>
            </div>)}
        </div>
    )
}

export default Project;