import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { loadTreesData } from '../models/ecologiServiceModel';

import '../styles/Main.scss';
import DashboardView from './DashboardView';

function App(): JSX.Element {
  const DEFAULT_CLASSNAME = 'App';

  useEffect(() => {
    loadTreesData();
  }, []);

  return (
    <div className={DEFAULT_CLASSNAME}>
      <Router>
        {/* <AppBanner /> */}
        <Switch>
          <Route path='/' exact>
            <DashboardView />
          </Route>
          <Route path='/dashboard'>
            <DashboardView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
