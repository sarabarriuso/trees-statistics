import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { IPlantedTreeData } from '../../interfaces/IPlantedTreeData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// const data = [
//   { name: '1', uv: 300, pv: 456 },
//   { name: '2', uv: -145, pv: 230 },
//   { name: '3', uv: -100, pv: 345 },
//   { name: '4', uv: -8, pv: 450 },
//   { name: '5', uv: 100, pv: 321 },
//   { name: '6', uv: 9, pv: 235 },
//   { name: '7', uv: 53, pv: 267 },
//   { name: '8', uv: 252, pv: -378 },
//   { name: '9', uv: 79, pv: -210 },
//   { name: '10', uv: 294, pv: -23 },
//   { name: '12', uv: 43, pv: 45 },
//   { name: '13', uv: -74, pv: 90 },
//   { name: '14', uv: -71, pv: 130 },
//   { name: '15', uv: -117, pv: 11 },
//   { name: '16', uv: -186, pv: 107 },
//   { name: '17', uv: -16, pv: 926 },
//   { name: '18', uv: -125, pv: 653 },
//   { name: '19', uv: 222, pv: 366 },
//   { name: '20', uv: 372, pv: 486 },
//   { name: '21', uv: 182, pv: 512 },
//   { name: '22', uv: 164, pv: 302 },
//   { name: '23', uv: 316, pv: 425 },
//   { name: '24', uv: 131, pv: 467 },
//   { name: '25', uv: 291, pv: -190 },
//   { name: '26', uv: -47, pv: 194 },
//   { name: '27', uv: -415, pv: 371 },
//   { name: '28', uv: -182, pv: 376 },
//   { name: '29', uv: -93, pv: 295 },
//   { name: '30', uv: -99, pv: 322 },
//   { name: '31', uv: -52, pv: 246 },
//   { name: '32', uv: 154, pv: 33 },
//   { name: '33', uv: 205, pv: 354 },
//   { name: '34', uv: 70, pv: 258 },
//   { name: '35', uv: -25, pv: 359 },
//   { name: '36', uv: -59, pv: 192 },
//   { name: '37', uv: -63, pv: 464 },
//   { name: '38', uv: -91, pv: -2 },
//   { name: '39', uv: -66, pv: 154 },
//   { name: '40', uv: -50, pv: 186 },
// ];

interface ITreeBarChartProps {
  chartData: Array<IPlantedTreeData>;
}

const TreeLineChart: React.FC<ITreeBarChartProps> = ({ chartData }) => {
  const DEFAULT_CLASSNAME = 'tree-bar-chart';

  // eslint-disable-next-line no-console
  console.log(chartData);
  // const { isLoading, isError, data, error } = useQuery<Array<Array<number>>, Error>('trees', getPlantedTreesData);

  const graphData = {
    labels: chartData.map(
      (dataPoint) => dataPoint.date.toISOString().split('T')[0],
    ),
    datasets: [
      {
        label: 'Trees planted',
        data: chartData.map((dataPoint) => dataPoint.count),
        backgroundColor: '#1976d2',
      },
    ],
  };

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Trees planted per day',
            },
            //tooltip: true,
          },
        }}
        data={graphData}
      />
    </div>
  );
};

// function formatXAxis(tickItem: string) {
//   return moment(tickItem).format('MM/YY');
// }

export default TreeLineChart;
