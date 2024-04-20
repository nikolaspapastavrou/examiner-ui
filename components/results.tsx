"use client";
import React, { useState } from 'react';

type QuestionData = {
    title: string;
    studentScore: string;
    explanation: string;
    resources: { description: string; url: string }[];
    moreQuestions: { description: string; question: string, solution: string }[];
};

const questions1: QuestionData[] = [
    {
        title: "Q1 Functions",
        studentScore: "2/3",
        explanation: "The correct answer was C. Understanding how lists are implemented in memory can help you here.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ],
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q2 Amdahl's Law",
        studentScore: "3/3",
        explanation: "The correct answer was A. Amdahl's Law is crucial for understanding the limits of parallel computing.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q3 Asymptotic Analysis",
        studentScore: "10/10",
        explanation: "Part A: The correct answer was O(1). Multiplying two numbers is constant time. Part B: The correct answer was O(N). We loop through each element N times. The split_point variable is not used, so it is not O(log N).",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q4 Bitwise Operators",
        studentScore: "0/6",
        explanation: "Part A: The correct answer was `a`. This is because for any x, x ^ x = 0. Also, 0 ^ x = x. Therefore, for part b, result ^ result = 0. XOR is associative.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", solution: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q5 List Indexing",
        studentScore: "3/3",
        explanation: "Python is 0-indexed. Therefore, to access the 3rd element, we do x[2].",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
];

const questions2: QuestionData[] = [
    {
        title: "Q1 Functions",
        studentScore: "2/3",
        explanation: "'sunny' is printed because weather is a local variable in the function and the global variable does not become reassigned. The function returns None.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ],
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q2 Amdahl's Law",
        studentScore: "3/3",
        explanation: "You've mastered this concept, so you did not need to redo this question.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q3 Asymptotic Analysis",
        studentScore: "10/10",
        explanation: "You've mastered this concept, so you did not need to redo this question.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q4 Bitwise Operators",
        studentScore: "6/6",
        explanation: "`truthy` returns True because all elements are a truthey value. This function is recursive.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
    {
        title: "Q5 List Indexing",
        studentScore: "3/3",
        explanation: "You've mastered this concept so you did not need to redo this question.",
        resources: [
            { description: "Lecture 1 slide 10 explains data structures.", url: "http://example.com/lecture1" },
            { description: "Book chapter 2 on data structures.", url: "http://example.com/bookchapter2" }
        ], 
        moreQuestions: [
            {description: "Spring 2020 Quest Question 3 Mystery Function", question: "https://drive.google.com/file/u/1/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing", solution: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"},
            {description: "Fall 2019 Question 8", question: "https://cs10.org/sp20/exams/final/2019Fa/exam.pdf", solution: "https://cs10.org/sp20/exams/final/2019Fa/answers.pdf"},
        ]
    },
];

type ResultsProps = {
    examType?: number;
};

//if examType == 1, then use questions 1 (practice exam 1). Otherwise use practice exam 2.
const Results : React.FC<ResultsProps> = ({ examType = 1 }) => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
    const questions = (examType === 1) ? questions1 : questions2
    const toggleSection = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    const calculateScores = (questions: QuestionData[]) => {
        let totalAchieved = 0;
        let totalPossible = 0;
      
        questions.forEach(question => {
          if (question.studentScore) {
            const scores = question.studentScore.split('/');
            if (scores.length === 2) {
              const [achieved, possible] = scores.map(Number);
              totalAchieved += achieved;
              totalPossible += possible;
            }
          }
        });
      
        return { totalAchieved, totalPossible };
      };
    var { totalAchieved, totalPossible } = calculateScores(questions); 

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-center flex-1">CS10 Beauty and Joy of Computing Practice Midterm {examType}</h1>
                <span className="font-bold">Overall Score: {totalAchieved}/{totalPossible}</span>
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
                                    <div>
                                        <strong>More Questions:</strong>
                                        <ul>
                                            {question.moreQuestions.map((mq, idx) => (
                                                <li key={idx} className="mb-2">
                                                    <a href={mq.question} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                                        {mq.description}
                                                    </a>
                                                    <a href={mq.solution} target="_blank" rel="noopener noreferrer" className="ml-2 px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded text-sm">
                                                        Solutions
                                                    </a>
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
