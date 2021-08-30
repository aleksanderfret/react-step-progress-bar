import React, { FC } from 'react';
import classNames from 'clsx';

import './ProgressStep.scss';

interface ProgressStepProps {
  active: boolean;
  activeStepClassName?: string;
  done: boolean;
  doneStepClassName?: string;
  name: string;
  stepClassName?: string;
  value: string;
}

const ProgressStep: FC<ProgressStepProps> = ({
  active,
  activeStepClassName = '',
  done,
  doneStepClassName = '',
  name,
  stepClassName = '',
  value
}) => {
  return (
    <>
      <div
        className={classNames('react-progress-step', stepClassName, {
          'react-progress-step--done': done,
          [doneStepClassName]: done,
          'react-progress-step--active': active,
          [activeStepClassName]: active
        })}
        title={name}
      >
        {value}
      </div>
    </>
  );
};

export default ProgressStep;
