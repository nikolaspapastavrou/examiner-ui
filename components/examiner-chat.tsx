/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RVyfoRWbged
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ExaminerChatProps = {
  aiMessage: string;
};

export function ExaminerChat({ aiMessage }: ExaminerChatProps) {
  // Shared horizontal padding value to align all elements
  const horizontalPadding = "px-6";

  // Add your AI's initial message here.
  // const aiInitialMessage = "Hello! Let's start with a simple question. What is the capital city of France?";


  return (
    <div className="flex h-screen w-full flex-col bg-white">
      {/* Header section */}
      <div className={`${horizontalPadding} pt-6 pb-4 bg-white shadow`}>
        <h2 className="text-2xl font-semibold">AI Exam Practice</h2>
        <h3 className="text-xl font-semibold mt-4">Question 1</h3>
      </div>

{/* Chat messages section */}
<div className="flex-1 p-6 overflow-auto bg-gray-100">
        {/* AI message bubble */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-black h-8 w-8 flex items-center justify-center text-white">AI</div>
            <span className="font-semibold">AI Assistant</span>
          </div>
          <div className="ml-10">
            <p>{aiMessage}</p>
          </div>
        </div>
        {/* Placeholder for additional chat messages */}
      </div>

      {/* Input and send button section */}
      <div className={`bg-gray-100 shadow-inner`}>
        <div className={`${horizontalPadding} py-4 flex items-center`}>
          <Input className="flex-1" placeholder="Type your answer here..." />
          <Button className="ml-4 bg-black text-white">Send</Button>
        </div>
      </div>

      {/* Navigation buttons section */}
      <div className={`${horizontalPadding} py-4 bg-white shadow`}>
        <div className="flex justify-between">
          <Button variant="black">Previous</Button>
          <Button variant="black">Next</Button>
        </div>
      </div>
    </div>
  );
}