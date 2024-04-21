import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Submission() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start bg-white px-4 pt-20">
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Upload practice exam to make it interactive</h1>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center w-full">
            <Label
              className={`flex items-center justify-center w-1/2 h-96 px-4 transition bg-white border-2 ${
                fileName ? 'border-green-500' : 'border-gray-300 border-dashed'
              } rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
              htmlFor="file"
            >
              <span className="flex items-center space-x-2">
                <UploadIcon className="w-6 h-6 text-gray-600" />
                {fileName ? (
                  <span className="font-medium text-gray-600 truncate">{fileName}</span>
                ) : (
                  <span className="font-medium text-gray-600">Drop files to upload in pdf, docx or txt format</span>
                )}
              </span>
              <Input className="hidden" id="file" type="file" onChange={handleFileChange} />
            </Label>
          </div>
        </div>
        <Button className="bg-black px-8 py-3 text-lg font-semibold text-white hover:bg-gray-700 w-full max-w-xs" size="lg">
            Submit
          </Button>
      </div>
    </main>
  )
}


function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
