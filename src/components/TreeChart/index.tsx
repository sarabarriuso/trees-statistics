import React, { useState } from 'react';

import { GetPlantedTreesData } from '../../store/bundles/treesSelectors';
import { filterChartData } from '../../utilities/treeChartHelper';
import MonthSelector from './MonthSelector';
import TreeLineChart from './TreeLineChart';
import YearSelector from './YearSelector';
import t from '../../language';

const TreeChart: React.FC = () => {
  const DEFAULT_CLASSNAME = 'tree-chart';

  const [fromMonth, setFromMonth] = useState<number>(1);
  const [toMonth, setToMonth] = useState<number>(12);
  const [fromYear, setFromYear] = useState<number>(2019);
  const [toYear, setToYear] = useState<number>(2019);

  const treesData = GetPlantedTreesData();

  const treeChartData = filterChartData(
    new Date(fromYear, fromMonth - 1),
    new Date(toYear, toMonth - 1),
    treesData || [],
  );

  return (
    <div className={DEFAULT_CLASSNAME}>
      <h2>{t.text('app.treeChart.chart.title')}</h2>
      <p> {t.text('app.treeChart.filters.instructions')}</p>
      <div className={`${DEFAULT_CLASSNAME}__filters`}>
        <YearSelector
          description={t.text('app.treeChart.filters.fromYear')}
          defaultYear={fromYear}
          yearSelectedCallback={(value: number) => setFromYear(value)}
        />
        <MonthSelector
          description={t.text('app.treeChart.filters.fromMonth')}
          defaultMonth={fromMonth}
          monthSelectedCallback={(value: number) => setFromMonth(value)}
        />
        <YearSelector
          description={t.text('app.treeChart.filters.toYear')}
          defaultYear={toYear}
          minYear={fromYear}
          yearSelectedCallback={(value: number) => setToYear(value)}
        />
        <MonthSelector
          description={t.text('app.treeChart.filters.toMonth')}
          defaultMonth={toMonth}
          monthSelectedCallback={(value: number) => setToMonth(value)}
        />
      </div>

      {treeChartData.length > 0 && (
        <React.Fragment>
          <TreeLineChart chartData={treeChartData} />
        </React.Fragment>
      )}
    </div>
  );
};

export default TreeChart;
