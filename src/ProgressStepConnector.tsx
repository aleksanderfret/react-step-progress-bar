import React, { FC } from 'react';
import classNames from 'clsx';

import './ProgressStepConnector.scss';

interface ProgressStepConnectorProps {
  done: boolean;
  doneStepConnectorClassName?: string;
  stepConnectorClassName?: string;
}

const ProgressStepConnector: FC<ProgressStepConnectorProps> = ({
  done,
  doneStepConnectorClassName = '',
  stepConnectorClassName = ''
}) => {
  return (
    <div
      className={classNames('react-step-connector', stepConnectorClassName, {
        'react-step-connector--done': done,
        [doneStepConnectorClassName]: done
      })}
    />
  );
};

export default ProgressStepConnector;
