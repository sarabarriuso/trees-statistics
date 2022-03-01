import { IPlantedTreeData } from '../../interfaces/IPlantedTreeData';

export enum ActionTypes {
  SET_PLANTED_TREES_DATA = 'TREES_BUNDLE_SET_PLANTED_TREES_DATA',
}

interface ISetPlantedTreesInfo {
  type: ActionTypes.SET_PLANTED_TREES_DATA;
  plantedTreesInfo: Array<IPlantedTreeData> | undefined;
}

// Action Combinator
type Action = ISetPlantedTreesInfo;

// State Slice Definition
export interface ITreesState {
  plantedTreesData: Array<IPlantedTreeData> | undefined;
}

// Action Creators
export const actionCreators = {
  setPlantedTreesData(
    plantedTreesInfo: Array<IPlantedTreeData>,
  ): ISetPlantedTreesInfo {
    return {
      type: ActionTypes.SET_PLANTED_TREES_DATA,
      plantedTreesInfo,
    };
  },
};

// Sub-Reducers
function setPlantedTreesDataAction(
  state: ITreesState = getDefault(),
  action: ISetPlantedTreesInfo,
): ITreesState {
  return {
    ...state,
    plantedTreesData: action.plantedTreesInfo,
  };
}

// Get Default
export function getDefault(): ITreesState {
  return {
    plantedTreesData: undefined,
  };
}

export default function treesReducer(
  state: ITreesState = getDefault(),
  action: Action,
): ITreesState {
  switch (action.type) {
    case ActionTypes.SET_PLANTED_TREES_DATA:
      return setPlantedTreesDataAction(state, action);
    default:
      return state;
  }
}
