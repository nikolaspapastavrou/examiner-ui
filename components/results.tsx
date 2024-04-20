"use client";
import React, { useState } from 'react';

type QuestionData = {
    title: string;
    studentScore: string;
    explanation: string;
    resources: { description: string; url: string }[];};

const questions: QuestionData[] = [
    {
        title: "Q1 Loops",
        studentScore: "2/3",
        explanation: "The correct answer was C. Understanding how lists are implemented in memory can help you here.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ]
    },
    {
        title: "Q2 Amdahl's Law",
        studentScore: "3/3",
        explanation: "The correct answer was A. Amdahl's Law is crucial for understanding the limits of parallel computing.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ]
    },
    {
        title: "Q3 Asymptotic Analysis",
        studentScore: "10/10",
        explanation: "Part A: The correct answer was O(1). Multiplying two numbers is constant time. Part B: The correct answer was O(N). We loop through each element N times. The split_point variable is not used, so it is not O(log N).",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ]
    },
    {
        title: "Q4 Bitwise Operators",
        studentScore: "0/6",
        explanation: "Part A: The correct answer was `a`. This is because for any x, x ^ x = 0. Also, 0 ^ x = x. Therefore, for part b, result ^ result = 0. XOR is associative.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ]
    },
    {
        title: "Q5 List Indexing",
        studentScore: "3/3",
        explanation: "Python is 0-indexed. Therefore, to access the 3rd element, we do x[2].",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ]
    },
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
                                                <li key={idx}>
                                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.description}</a>
                                                </li>
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
