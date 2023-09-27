import '../style/Skills.scss';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);




// import { Chart } from "react-google-charts";

// const dataOld = [
//     ["Major", "Degrees"],
//     ["Business", 256070],
//     ["Education", 108034],
//     ["Social Sciences &amp; History", 127101],
//     ["Health", 81863],
//     ["Psychology", 74194],
// ];

// const dataNew = [
//     ["Major", "Degrees"],
//     ["Business", 358293],
//     ["Education", 101265],
//     ["Social Sciences &amp; History", 172780],
//     ["Health", 129634],
//     ["Psychology", 97216],
// ];

// export const diffdata = {
//     old: dataOld,
//     new: dataNew,
// };

// export const options = {
//     pieSliceText: "none",
// };

function Skills() {
    // const data = {
    //     labels: ['C', 'C++', 'JavaScript', 'TypeScript', 'React', 'Css/Sass'],
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgb(255, 99, 132)',
    //                 'rgb(54, 162, 235)',
    //                 'rgb(255, 206, 86)',
    //                 'rgb(75, 192, 192)',
    //                 'rgb(153, 102, 255)',
    //                 'rgb(255, 159, 64)',
    //             ],
    //             borderColor: [
    //                 'rgb(255, 99, 132)',
    //                 'rgb(54, 162, 235)',
    //                 'rgb(255, 206, 86)',
    //                 'rgb(75, 192, 192)',
    //                 'rgb(153, 102, 25)',
    //                 'rgb(255, 159, 64)',
    //             ],
    //             borderWidth: 1,
    //         },
    //     ],
    // };


    return (
        <div className="Skills">
            {/* <Doughnut data={data} className='Skills' /> */}
            {/* <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                diffdata={diffdata}
                options={options}
            /> */}
        </div>
    )
}

export default Skills