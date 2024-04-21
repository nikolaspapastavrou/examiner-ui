"use client";

// Home component
import React, { useState } from 'react';
import { ExaminerChat } from "../components/examiner-chat";
import Results from "../components/results";
import { Submission } from "../components/submission";

export default function Home() {
  const [step, setStep] = useState('submission');

  const goToExaminer = () => setStep('examiner');
  const goToResults = () => setStep('results');

  return (
    <main className="flex flex-1 w-full">
      {step === 'submission' && <Submission onFileSubmitted={goToExaminer} />}
      {step === 'examiner' && <ExaminerChat onCompleted={goToResults} />}
      {step === 'results' && <Results />}
    </main>
  );
}
