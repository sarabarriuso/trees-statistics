import { mockSuccessEcologiTreeDataResponse } from '../interfaces/_mocks_/mockEcologiTreeDataResponse';
import { getPlantedTreesData } from './ecologiService';
import * as httpUtilities from '../utilities/httpUtilities';

export default describe('Ecologi service tests', () => {
  const baseUrl: string | undefined = process.env.REACT_APP_ECOLOGI_SERVICE_URL;

  describe('getPlantedTreesData tests', () => {
    it('Test handles resolved promise data', async () => {
      // Arrange
      const expected = `${baseUrl}trees`;
      const getMock = jest
        .spyOn(httpUtilities, 'get')
        .mockResolvedValue(mockSuccessEcologiTreeDataResponse);

      // Act
      const result = await getPlantedTreesData();

      // Assert
      expect.assertions(3);
      expect(getMock).toBeCalledTimes(1);
      expect(getMock).toBeCalledWith(expected);
      expect(result).toEqual(mockSuccessEcologiTreeDataResponse);
    });

    it('Test handles rejected promise', async () => {
      // Arrange
      const expected = `${baseUrl}trees`;
      const getMock = jest
        .spyOn(httpUtilities, 'get')
        .mockRejectedValue(new Error('Error'));

      // Act/Assert
      expect.assertions(3);
      await expect(getPlantedTreesData()).rejects.toEqual('Error');
      expect(getMock).toBeCalledTimes(1);
      expect(getMock).toBeCalledWith(expected);
    });
  });
});
