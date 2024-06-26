"use client"

// Imports
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from 'react';

// Let's assume you have a list of questions
const questions = [
  "What is the runtime of this Python code: `square = lambda n: n * n`? A: O(1) B: O(logN) C: O(N) D: O(N^2) E:O(2^N). Explain your choice.",
  "Which of the following statements is True regarding Test-Driven-Development? A: All tests we write should pass before we start coding. B: Python will error if we don't write tests for our code. C: Edge cases are unimportant and don't need to be tested. D: We should write tests before we start implementing programs. Explain your choice",
  "What does Amdahl's law describe? A: The more cores (CPUs) we add, the less speedup we get. B. There is a limit to the amount of speedup we can get since parts of our code must run sequentially. C: There is a limit to how many cores we can add to solve one computational problem. Explain your choice",
  // Add more questions as needed
];

// Define a custom component for the Typing indicator
const TypingIndicator = () => {
  const [text, setText] = useState('Typing.');
  useEffect(() => {
    const dotCount = text.split('.').length; // Count the current number of dots
    const interval = setInterval(() => {
      // Cycle through different states based on the current text
      setText(dotCount < 4 ? `Typing${'.'.repeat(dotCount)}` : 'Typing.');
    }, 500); // Update every 500 milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [text]);

  return <p>{text}</p>;
};

// Component
export function ExaminerChat({ onCompleted }) {
  const [input, setInput] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([{ sender: 'AI', text: questions[0] }]);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const questionNumber = currentQuestionIndex + 1; // Since array index is 0-based

  useEffect(() => {
    // Load messages for the current question from localStorage
    const savedMessages = sessionStorage.getItem(`messages_question_${currentQuestionIndex}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Start with the AI's initial message if no saved messages are found
      setMessages([{ sender: 'AI', text: questions[currentQuestionIndex] }]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    // Save messages to localStorage whenever they change
    sessionStorage.setItem(`messages_question_${currentQuestionIndex}`, JSON.stringify(messages));
  }, [messages, currentQuestionIndex]);

  useEffect(() => {
    // Scroll to the last message
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() && !isTyping) {
      const userMessage = { sender: 'User', text: input };
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      setInput('');
  
      // Fetch data from API

      const response = await fetch('https://mongodbgenaihackathon-0f9e3cd45362.herokuapp.com/api/get_answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          original_question: questions[currentQuestionIndex],
          conversation_history: messages.slice(1).map(m => m.text)
        })
      });
      const data = await response.json();
      
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'AI', text: data.message }]);
    }
  };

  useEffect(() => {
    setInput(''); // Clear input on question change
    setIsTyping(false); // Reset typing indicator on question change
  }, [currentQuestionIndex]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setMessages([{ sender: 'AI', text: questions[currentQuestionIndex + 1] }]);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setMessages([{ sender: 'AI', text: questions[currentQuestionIndex - 1] }]);
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log('Submitting answers...');
    onCompleted(); // Call the passed in function when exam is submitted
  };

  const horizontalPadding = "px-6";

  return (
    <div className="flex h-screen w-full flex-col bg-white">
      {/* Header section */}
      <div className={`${horizontalPadding} pt-6 pb-4 bg-white shadow`}>
        <h2 className="text-2xl font-semibold">Study Spark AI</h2>
        <h3 className="text-xl font-semibold mt-4">Question {questionNumber}</h3> {/* Use the questionNumber variable here */}
      </div>

      {/* Chat messages section */}
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`flex flex-row items-start gap-2 mb-4`}>
            {message.sender === 'AI' ? (
              <div className="rounded-full bg-black h-8 w-8 flex items-center justify-center text-white">
                AI
              </div>
            ) : (
              <img
                src="/user_profile_icon.png"
                alt="User"
                className="rounded-full h-8 w-8" // This makes the image rounded
              />
            )}
            <div className="flex flex-col">
              <span className="font-semibold">{message.sender === 'AI' ? 'AI Assistant' : 'You'}</span>
              <div className={`bg-white rounded-lg p-2`}>
                <p>{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-row items-start gap-2 mb-4">
            <div className="rounded-full bg-black h-8 w-8 flex items-center justify-center text-white">AI</div>
            <div className="flex flex-col">
              <span className="font-semibold">AI Assistant</span>
              <div className="bg-white rounded-lg p-2">
                <TypingIndicator /> {/* Use TypingIndicator component here */}
              </div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Input and send button section */}
      <div className={`bg-gray-100 shadow-inner`}>
        <div className={`${horizontalPadding} py-4 flex items-center`}>
          <Input
            className={`flex-1 ${isTyping ? 'bg-gray-300' : 'bg-white'}`}
            placeholder="Type your answer here..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e: any) => e.key === 'Enter' && handleSendMessage()}
            disabled={isTyping} // Disable the input field when AI is typing
          />
          <Button 
            className={`ml-4 bg-black text-white hover:bg-white hover:text-black border border-black ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSendMessage}
            disabled={isTyping} // Disable the button when AI is typing
          >
            Send
          </Button>
        </div>
      </div>
      {/* Navigation buttons section */}
      <div className={`${horizontalPadding} py-4 bg-white shadow`}>
        <div className="flex justify-between">
          <Button 
            className={`hover:bg-white hover:text-black border border-black ${isFirstQuestion ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-black text-white'}`}
            onClick={goToPreviousQuestion}
            disabled={isFirstQuestion}
          >
            Previous
          </Button>
          {isLastQuestion ? (
            <Button 
              className="hover:bg-white hover:text-black border border-black bg-black text-white" 
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button 
              className="hover:bg-white hover:text-black border border-black bg-black text-white" 
              onClick={goToNextQuestion}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}