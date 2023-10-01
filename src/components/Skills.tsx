import { PieChart } from "react-minimal-pie-chart";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import "../style/Skills.scss";
import { useEffect, useState } from "react";

interface SkillModel {
    tech: string;
    perf: number;
}

function Skills({ className }: { className: string }) {
    const skillFirst: SkillModel[] = [{
        tech: 'React',
        perf: 75
    }, {
        tech: 'TypeScript',
        perf: 74
    }, {
        tech: 'JavaScript',
        perf: 74
    }];
    const skillSecond: SkillModel[] = [{
        tech: 'Css/Sass',
        perf: 85
    }, {
        tech: 'C',
        perf: 40
    }, {
        tech: 'C++',
        perf: 31
    }]
    const [scrollIndex, setScrollIndex] = useState(0);
    const handleLeft = () => {
        let pie = document.querySelectorAll('.pie') as NodeListOf<HTMLElement>;
        pie.forEach((el) => el.style.animation = 'slide-left 500ms forwards');
        setTimeout(() => {
            setScrollIndex(scrollIndex + 1)
        }, 500)
    };
    const handleRight = () => {
        let pie = document.querySelectorAll('.pie') as NodeListOf<HTMLElement>;
        pie.forEach((el) => el.style.animation = 'slide-left 500ms forwards');        
        setTimeout(() => {
            setScrollIndex(scrollIndex - 1)
        }, 500)
    };
    useEffect(()=>{
        let pie = document.querySelectorAll('.pie') as NodeListOf<HTMLElement>;
        pie.forEach((el) => el.style.animation = 'fade-in 500ms');
    },[scrollIndex])

    return (
        <div className={`Skills ${className}`}>

            <h2>Skills:</h2>
            <div id="skill-container" >
                { scrollIndex < 1 ? <FiChevronLeft className='scroll left' onClick={handleLeft}/> : <p style={{width: '2rem'}}></p>}
                {scrollIndex < 1 ? skillFirst.map(item => <div className="pie" key={item.tech}>
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
                    <div className="descri">
                        <p className="perf" style={{ margin: '0' }}>{item.perf}%</p>
                        <p className="tech" style={{ margin: '0' }}>{item.tech}</p>
                    </div>
                </div>
                ) : skillSecond.map(item => <div className="pie" key={item.tech}>
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
                <div className="descri">
                    <p className="perf" style={{ margin: '0' }}>{item.perf}%</p>
                    <p className="tech" style={{ margin: '0' }}>{item.tech}</p>
                </div>
                </div>
                 )}
            { scrollIndex  > 0 ? <FiChevronRight className='scroll right' onClick={handleRight} /> : <p style={{width: '2rem'}}></p>}
            </div>
        </div >
    );
}


export default Skills;