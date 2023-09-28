import { useEffect, useRef } from "react";
import "../style/Skills.scss";
import { PieChart } from "react-minimal-pie-chart";

interface SkillModel {
    tech: string;
    perf: number;
}

function Skills() {
    const skill: SkillModel[] = [{
        tech: 'React',
        perf: 75
    }, {
        tech: 'TypeScript',
        perf: 74
    }, {
        tech: 'JavaScript',
        perf: 74
    }, {
        tech: 'Css/Sass',
        perf: 85
    }, {
        tech: 'C',
        perf: 40
    }, {
        tech: 'C++',
        perf: 31
    }]

    return (
        <div className="Skills">

            <div id="skill-container" style={{ width: 'calc(100%)', height: '75vh', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', border: '2px solid gray', borderRadius: '1rem', background: 'radial-gradient(\'gray\',\'gray\')' }}>

                {skill.map(item => <div className="pie" key={item.tech} style={{ padding: '0 3rem', position: 'relative', width: '10rem', height: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
                    <PieChart
                        className="chart"
                        data={[{ value: item.perf - 5, color: "url(#gradient-1)" }]}
                        totalValue={100}
                        lineWidth={25}
                        background="gray"
                        startAngle={-90}
                        children={
                            <linearGradient id="gradient-1">
                                <stop offset="25%" stopColor="#FF3333" />
                                <stop offset="75%" stopColor="#a50101" />
                            </linearGradient>
                        }
                        rounded={false}
                        animationEasing="ease-out"
                        animate={true}
                        animationDuration={1500}
                    />
                    <div className="descri" style={{ position: 'absolute', top: '35%', display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
                        <p className="perf" style={{ margin: '0' }}>{item.perf}%</p>
                        <p className="tech" style={{ margin: '0' }}>{item.tech}</p>
                    </div>
                </div>
                )}
            </div>
        </div >
    );
}


export default Skills;