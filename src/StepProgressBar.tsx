import React, { FC } from 'react';

import ProgressStep from './ProgressStep';
import ProgressStepConnector from './ProgressStepConnector';

import './StepProgressBar.scss';

interface Step {
  done: boolean;
  name: string;
}

export type Steps = Step[];

interface StepProgressBarProps {
  activeStepClassName?: string;
  currentStep: number;
  doneStepClassName?: string;
  nameAsValue?: boolean;
  steps: Steps;
  stepClassName?: string;
}

const StepProgressBar: FC<StepProgressBarProps> = ({
  activeStepClassName,
  currentStep,
  doneStepClassName,
  nameAsValue = false,
  stepClassName,
  steps
}) => {
  const lastDoneStepIndex = steps.findIndex(step => step.done);

  return (
    <div className="react-progress-bar">
      {steps.map(({ done, name }, index) => {
        const stepNumber = index + 1;
        const value = nameAsValue ? name : `${stepNumber}`;
        const active = currentStep === stepNumber;
        const showConnector = index < steps.length - 1;
        const doneConnector = index <= lastDoneStepIndex;

        return (
          <>
            <ProgressStep
              active={active}
              activeStepClassName={activeStepClassName}
              done={done}
              doneStepClassName={doneStepClassName}
              key={name}
              name={name}
              stepClassName={stepClassName}
              value={value}
            />
            {showConnector && <ProgressStepConnector done={doneConnector} />}
          </>
        );
      })}
    </div>
  );
};

export default StepProgressBar;
