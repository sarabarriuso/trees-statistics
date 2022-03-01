import Header from './Header';
import TreeChart from './TreeChart';

const Dashboard: React.FC = () => {
  const DEFAULT_CLASSNAME = 'dashboard';

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Header />
      <TreeChart />
    </div>
  );
};

export default Dashboard;
