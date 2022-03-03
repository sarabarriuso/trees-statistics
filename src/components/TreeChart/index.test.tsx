import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as TreesSelectors from '../../store/bundles/treesSelectors';
import * as TreeChartHelpers from '../../utilities/treeChartHelper';

import { mockPlantedTreeDataResponse } from '../../interfaces/_mocks_/mockPlantedTreeData';
import TreeChart from '.';
import TreeLineChart from './TreeLineChart';

export default describe('TreeChart Index Tests', () => {
  const getPlantedTreesDataMock = jest.spyOn(
    TreesSelectors,
    'GetPlantedTreesData',
  );
  const filterCharDataMock = jest.spyOn(TreeChartHelpers, 'filterChartData');

  afterEach(() => {
    getPlantedTreesDataMock.mockClear();
    filterCharDataMock.mockClear();
  });

  it('Renders successfully when there is not tree data', () => {
    // Arrange
    getPlantedTreesDataMock.mockReturnValue([]);
    filterCharDataMock.mockReturnValue([]);

    // Act
    const tree = shallow(<TreeChart />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    const treeLineChart = tree.find(TreeLineChart);
    expect(treeLineChart.length).toBe(0);
  });

  it('Renders successfully when there is tree data', () => {
    // Arrange
    getPlantedTreesDataMock.mockReturnValue(mockPlantedTreeDataResponse);
    filterCharDataMock.mockReturnValue(mockPlantedTreeDataResponse);
    // Act
    const tree = shallow(<TreeChart />);

    //Assert
    expect(toJson(tree)).toMatchSnapshot();
    const treeLineChart = tree.find(TreeLineChart);
    expect(treeLineChart.length).toBe(1);
  });

  it('Calls filterChartData with the expected values', () => {
    // Arrange
    getPlantedTreesDataMock.mockReturnValue(mockPlantedTreeDataResponse);
    filterCharDataMock.mockReturnValue(mockPlantedTreeDataResponse);

    // Act
    const tree = shallow(<TreeChart />);

    //Assert
    const treeLineChart = tree.find(TreeLineChart);
    expect(filterCharDataMock).toHaveBeenCalledTimes(1);
    expect(filterCharDataMock).toHaveBeenCalledWith(
      new Date(2019, 0),
      new Date(2019, 11),
      mockPlantedTreeDataResponse,
    );
    expect(treeLineChart.length).toBe(1);
  });
});
