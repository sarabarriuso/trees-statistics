import React, { useState } from 'react';
import { GetPlantedTreesData } from '../../store/bundles/treesSelectors';
import { filterChartData } from '../../utilities/treeChartHelper';
import MonthSelector from './MonthSelector';
import TreeLineChart from './TreeLineChart';
import YearSelector from './YearSelector';

const TreeChart: React.FC = () => {
  const DEFAULT_CLASSNAME = 'tree-chart';

  const [fromMonth, setFromMonth] = useState<number>(1);
  const [toMonth, setToMonth] = useState<number>(1);
  const [fromYear, setFromYear] = useState<number>(2019);
  const [toYear, setToYear] = useState<number>(1);

  const treesData = GetPlantedTreesData();

  //const treesData = useMemo(() => GetPlantedTreesData(), []);
  const treeChartData = filterChartData(
    new Date(fromYear, fromMonth - 1),
    new Date(toYear, toMonth - 1),
    treesData || [],
  );

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}__filters`}>
        <YearSelector
          description={'From year:'}
          defaultYear={fromYear}
          yearSelectedCallback={(value: number) => setFromYear(value)}
        />
        <MonthSelector
          description={'From month:'}
          defaultMonth={fromMonth}
          monthSelectedCallback={(value: number) => setFromMonth(value)}
        />
        <YearSelector
          description={'To year:'}
          defaultYear={toYear}
          minYear={fromYear}
          yearSelectedCallback={(value: number) => setToYear(value)}
        />
        <MonthSelector
          description={'To month:'}
          defaultMonth={toMonth}
          monthSelectedCallback={(value: number) => setToMonth(value)}
        />
      </div>

      {treesData && <TreeLineChart chartData={treeChartData} />}
    </div>
  );
};

export default TreeChart;
