import { ReactComponent as EcoLogo } from '../assets/images/ecologi-logo.svg';
import t from '../language';

const Header: React.FC = () => {
  const DEFAULT_CLASSNAME = 'header';
  return (
    <div className={DEFAULT_CLASSNAME}>
      <EcoLogo className={`${DEFAULT_CLASSNAME}__logo`} />
      <h1 className={`${DEFAULT_CLASSNAME}__title`}>
        🌳{t.text('app.appHeader')}
      </h1>
      <div className={`${DEFAULT_CLASSNAME}__background`} />
    </div>
  );
};

export default Header;
