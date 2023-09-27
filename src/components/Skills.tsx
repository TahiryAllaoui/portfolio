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

    const item = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        item.current!.style.animation = "fade-in 1500ms linear";
    }, []);

    return (
        <div ref={item} id="skill-container" style={{ width: 'calc(100% - 15rem)', height: '50vh', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

            {skill.map(item => <div className="pie" key={item.tech} style={{ width: '15rem', height: '15rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
                <PieChart
                    className="chart"
                    data={[{ value: item.perf - 5, color: "url(#gradient-1)" }]}
                    totalValue={100}
                    lineWidth={25}
                    children={
                        <linearGradient id="gradient-1">
                            <stop offset="25%" stopColor="#8e0c0c" />
                            <stop offset="75%" stopColor="#cb7a7a" />
                        </linearGradient>
                    }
                    rounded={true}
                    animate={true}
                    animationDuration={1500}
                />
                <p className="perf">{item.perf}%</p>
                <p className="tech">{item.tech}</p>
            </div>
            )}
        </div>
    );
}


export default Skills;