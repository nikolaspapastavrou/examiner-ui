import {ExaminerChat} from "../components/examiner-chat";

const initialAiMessage = "Hello! Let's start with a simple question. What is the capital city of France?";

export default function Home() {
  return (
    <main className="flex flex-1 w-full">
      <ExaminerChat aiMessage={initialAiMessage} />
    </main>
  );
}
