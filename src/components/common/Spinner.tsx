import React from 'react';
import { ReactComponent as SpinnerSvg } from '../../assets/images/spinner.svg';

export interface ISpinnerProps {
  caption: string;
}

const Spinner: React.FC<ISpinnerProps> = ({ caption }) => {
  const DEFAULT_CLASSNAME = 'spinner';

  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}__wrap`}>
        <SpinnerSvg className={`${DEFAULT_CLASSNAME}__svg`} />
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Spinner;
