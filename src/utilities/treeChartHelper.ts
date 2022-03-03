import { IPlantedTreeData } from '../interfaces/IPlantedTreeData';

export function filterChartData(
  fromDate: Date,
  toDate: Date,
  data: Array<IPlantedTreeData>,
): Array<IPlantedTreeData> {
  return data.filter(
    (treeData) => treeData.date >= fromDate && treeData.date <= toDate,
  );
}
