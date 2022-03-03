import { IPlantedTreeData } from '../../interfaces/IPlantedTreeData';

export enum ActionTypes {
  SET_PLANTED_TREES_DATA = 'TREES_BUNDLE_SET_PLANTED_TREES_DATA',
  SET_LOADING_PLANTED_TREES_DATA = 'TREES_BUNDLE_SET_LOADING_PLANTED_TREES_DATA',
}

interface ISetPlantedTreesInfo {
  type: ActionTypes.SET_PLANTED_TREES_DATA;
  plantedTreesInfo: Array<IPlantedTreeData> | undefined;
}
interface ISetLoadingPlantedTreesInfo {
  type: ActionTypes.SET_LOADING_PLANTED_TREES_DATA;
  loadingPlantedTreesInfo: boolean;
}

// Action Combinator
type Action = ISetPlantedTreesInfo | ISetLoadingPlantedTreesInfo;

// State Slice Definition
export interface ITreesState {
  loadingPlantedTreesData: boolean;
  plantedTreesData: Array<IPlantedTreeData> | undefined;
}

// Action Creators
export const actionCreators = {
  setLoadingPlantedTreesData(
    loadingPlantedTreesInfo: boolean,
  ): ISetLoadingPlantedTreesInfo {
    return {
      type: ActionTypes.SET_LOADING_PLANTED_TREES_DATA,
      loadingPlantedTreesInfo,
    };
  },
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

function setLoadingPlantedTreesDataAction(
  state: ITreesState = getDefault(),
  action: ISetLoadingPlantedTreesInfo,
): ITreesState {
  return {
    ...state,
    loadingPlantedTreesData: action.loadingPlantedTreesInfo,
  };
}

// Get Default
export function getDefault(): ITreesState {
  return {
    loadingPlantedTreesData: false,
    plantedTreesData: undefined,
  };
}

export default function treesReducer(
  state: ITreesState = getDefault(),
  action: Action,
): ITreesState {
  switch (action.type) {
    case ActionTypes.SET_LOADING_PLANTED_TREES_DATA:
      return setLoadingPlantedTreesDataAction(state, action);
    case ActionTypes.SET_PLANTED_TREES_DATA:
      return setPlantedTreesDataAction(state, action);
    default:
      return state;
  }
}
