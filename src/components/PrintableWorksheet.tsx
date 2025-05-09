import React from 'react';
import { Button } from './ui/button';
import { Printer, FileDown, FileText } from 'lucide-react';
import { Question, Subject } from '@/types/questionTypes';

// Use react-to-print for PDF generation
import { useReactToPrint } from 'react-to-print';

interface PrintableWorksheetProps {
  questions: Question[];
  subject: Subject | null;
  difficulty: string;
}

const PrintableWorksheet: React.FC<PrintableWorksheetProps> = ({
  questions,
  subject,
  difficulty,
}) => {
  const worksheetRef = React.useRef<HTMLDivElement>(null);
  const answersRef = React.useRef<HTMLDivElement>(null);

  const handlePrintWorksheet = useReactToPrint({
    content: () => worksheetRef.current,
    documentTitle: `${subject}-worksheet`,
  });

  const handlePrintAnswers = useReactToPrint({
    content: () => answersRef.current,
    documentTitle: `${subject}-answers`,
  });

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrintWorksheet}
          className="flex items-center gap-1.5"
        >
          <FileDown className="h-4 w-4" />
          Download Worksheet
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrintAnswers}
          className="flex items-center gap-1.5"
        >
          <FileText className="h-4 w-4" />
          Download Answers
        </Button>
      </div>

      {/* Hidden worksheet div that will be printed */}
      <div className="hidden">
        <div ref={worksheetRef} className="p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-1">
              11+ {subject && subject.charAt(0).toUpperCase() + subject.slice(1)} Practice
            </h1>
            <p className="text-gray-600 text-sm">{formatDate()}</p>
            {difficulty !== 'all' && (
              <p className="text-sm mt-1">
                Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </p>
            )}
          </div>

          <div className="space-y-8">
            {questions.map((question, index) => (
              <div key={question.id} className="pb-4 border-b">
                <div className="flex">
                  <span className="font-bold mr-2">{index + 1}.</span>
                  <div>
                    <p className="font-medium">{question.text}</p>
                    
                    {question.imageUrl && (
                      <div className="my-2">
                        <img 
                          src={question.imageUrl} 
                          alt={`Question ${index + 1}`} 
                          className="max-h-48 object-contain"
                        />
                      </div>
                    )}
                    
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-start">
                          <span className="font-medium mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                          <div>
                            <span>{option}</span>
                            {question.optionImages && question.optionImages[optIndex] && (
                              <div className="mt-1">
                                <img 
                                  src={question.optionImages[optIndex]} 
                                  alt={`Option ${String.fromCharCode(65 + optIndex)}`} 
                                  className="max-h-24 object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Answer sheet */}
        <div ref={answersRef} className="p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-1">
              11+ {subject && subject.charAt(0).toUpperCase() + subject.slice(1)} Practice - ANSWERS
            </h1>
            <p className="text-gray-600 text-sm">{formatDate()}</p>
            {difficulty !== 'all' && (
              <p className="text-sm mt-1">
                Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={question.id} className="pb-2 border-b">
                <div className="flex">
                  <span className="font-bold mr-2">{index + 1}.</span>
                  <div>
                    <p className="text-sm">{question.text.substring(0, 50)}...</p>
                    <p className="font-bold mt-1">
                      Answer: {String.fromCharCode(65 + question.options.indexOf(question.correctAnswer))} - {question.correctAnswer}
                    </p>
                    <p className="text-sm mt-1">{question.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintableWorksheet;
