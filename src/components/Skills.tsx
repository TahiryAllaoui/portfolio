import '../style/Skills.scss';

function Skills() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>Skills:
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <h2>Skill {i}</h2>)}

        </div>

    )
}

export default Skills