"use client"

import React, { useState } from 'react';
import {ExaminerChat} from "../components/examiner-chat";
import Results from "../components/results";


export default function Home() {
  const [showResults, setShowResults] = useState(false);

  return (
    <main className="flex flex-1 w-full">
      {!showResults ? (
        <ExaminerChat onCompleted={() => setShowResults(true)} />
      ) : (
        <Results />
      )}
    </main>
  );
}
