import React, { FC, useState } from 'react';

import StepProgressBar from './StepProgressBar';

import './App.scss';

const initialSteps = [
  { name: 'step1', done: true },
  { name: 'step2', done: false },
  { name: 'step3', done: false },
  { name: 'step4', done: false }
];

const App: FC = () => {
  const [steps, setSteps] = useState(initialSteps);
  const [currentStep, setCurrentStep] = useState(2);

  // eslint-disable-next-line no-console
  console.log(setSteps, setCurrentStep);

  return (
    <div className="app">
      <StepProgressBar currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default App;
