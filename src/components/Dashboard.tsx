import { GetLoadingPlantedTreesData } from '../store/bundles/treesSelectors';
import Spinner from './common/Spinner';
import Header from './Header';
import TreeChart from './TreeChart';
import t from '../language';

const Dashboard: React.FC = () => {
  const DEFAULT_CLASSNAME = 'dashboard';

  const loadingData = GetLoadingPlantedTreesData();

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Header />
      {loadingData ? (
        <Spinner caption={t.text('app.dashboard.loadingData')} />
      ) : (
        <TreeChart />
      )}
    </div>
  );
};

export default Dashboard;
