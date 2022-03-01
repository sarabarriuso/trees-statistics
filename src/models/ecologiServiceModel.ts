import { String } from 'typescript-string-operations';

import dispatch from '../store/dispatch';
import t from '../language';
import { getPlantedTreesData } from '../dataServices/ecologiService';
import { errorToast } from '../utilities/toasts';
import { actionCreators as treesActionCreators } from '../store/bundles/treesBundle';
import { IEcologiTreeDataResponse } from '../interfaces/responses/IEcologiTreeDataResponse';
import { IPlantedTreeData } from '../interfaces/IPlantedTreeData';

export function loadTreesData(): void {
  getPlantedTreesData()
    .then((data: IEcologiTreeDataResponse) => {
      const groupedByDateData = groupTreesByDay(data.data);
      dispatch(treesActionCreators.setPlantedTreesData(groupedByDateData));
    })
    .catch((e: Error) => {
      // eslint-disable-next-line no-console
      console.error(
        `ecologiServiceModel.loadTreesData: unexpected error occured: ${e.message}`,
      );
      errorToast(String.Format(t.text('app.toasts.loadTreesDataFailure')));
    });
}

function groupTreesByDay(data: ReadonlyArray<ReadonlyArray<number>>) {
  const mappedData: Array<IPlantedTreeData> = [];
  // TODO: can be optimized?
  const groupedTreesByDay = data.reduce((acc: any, item: any) => {
    if (acc[item[1]]) {
      acc[item[1]] += item[0];
    } else {
      acc[item[1]] = item[0];
    }
    return acc;
  }, {});

  Object.keys(groupedTreesByDay).map((key): void => {
    const treeData: IPlantedTreeData = {
      count: groupedTreesByDay[key],
      date: new Date(+key * 1000),
    };
    mappedData.push(treeData);
  });

  return mappedData;
}
