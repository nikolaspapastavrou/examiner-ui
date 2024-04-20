import React, { useState } from 'react';

type QuestionData = {
    title: string;
    studentScore: string;
    explanation: string;
    resources: string[];
};

const questions: QuestionData[] = [
    {
        title: "Q1 Lists",
        studentScore: "2/3",
        explanation: "The correct answer was C. Understanding how lists are implemented in memory can help you here.",
        resources: [
            "Lecture 1 slide 10 explains data structures.",
            "Book chapter 2 on data structures."
        ]
    },
    {
        title: "Q2 Amdahl's Law",
        studentScore: "3/3",
        explanation: "The correct answer was A. Amdahl's Law is crucial for understanding the limits of parallel computing.",
        resources: [
            "Lecture 3 slide 15 explains Amdahl's Law.",
            "Discussion in tutorial 2 covers this topic in depth."
        ]
    }
];

const Results = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-center flex-1">Practice Midterm</h1>
                <span className="font-bold">Overall Score: 60/70</span>
            </div>
            <div className="mt-4">
                {questions.map((question, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded mb-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">{question.title}</h2>
                            <span className="font-bold">{question.studentScore}</span>
                        </div>
                        <div className="mt-2">
                            <button onClick={() => toggleSection(index)} className="text-blue-500 hover:text-blue-700">
                                {openQuestionIndex === index ? 'Hide Details' : 'Show Details'}
                            </button>
                            {openQuestionIndex === index && (
                                <div className="mt-2">
                                    <p><strong>Explanation:</strong> {question.explanation}</p>
                                    <div>
                                        <strong>Relevant Resources:</strong>
                                        <ul>
                                            {question.resources.map((resource, idx) => (
                                                <li key={idx}>{resource}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;
