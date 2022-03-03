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

interface ITreeBarChartProps {
  chartData: Array<IPlantedTreeData>;
}

const TreeLineChart: React.FC<ITreeBarChartProps> = ({ chartData }) => {
  const DEFAULT_CLASSNAME = 'tree-bar-chart';
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
          },
        }}
        data={graphData}
      />
    </div>
  );
};

export default TreeLineChart;
