import { IPlantedTreeData } from '../../interfaces/IPlantedTreeData';
import IState from '../state';
import { useStateSelector } from '../useSelector';

export const GetPlantedTreesData = (): Array<IPlantedTreeData> | undefined =>
  useStateSelector((state: IState) => state.treesState.plantedTreesData);
