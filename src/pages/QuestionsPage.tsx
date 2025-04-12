
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import sampleQuestions from '@/data/sampleQuestions';
import { Subject } from '@/context/QuizContext';
import { Question } from '@/types/questionTypes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, Info } from 'lucide-react';

const QuestionsPage = () => {
  const [activeSubject, setActiveSubject] = useState<Subject>('maths');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  // Reset current page when subject changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSubject]);

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const subjects = Object.keys(sampleQuestions) as Subject[];
  const currentQuestions = sampleQuestions[activeSubject];
  
  // Pagination logic
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestionsPage = currentQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(currentQuestions.length / questionsPerPage);

  const renderPaginationLinks = () => {
    // For smaller number of pages, show all page links
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
        <PaginationItem key={pageNum}>
          <PaginationLink
            onClick={() => setCurrentPage(pageNum)}
            isActive={currentPage === pageNum}
          >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      ));
    }
    
    // For larger number of pages, use ellipsis
    const pages = [];
    
    // Always show first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          onClick={() => setCurrentPage(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Calculate range of pages to show around current page
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);
    
    // Show ellipsis if needed before startPage
    if (startPage > 2) {
      pages.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Add page numbers around current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => setCurrentPage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Show ellipsis if needed after endPage
    if (endPage < totalPages - 1) {
      pages.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => setCurrentPage(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pages;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <h1 className="text-3xl font-display font-bold text-center mb-8">
          Question Bank
        </h1>
        
        <Tabs
          defaultValue="maths"
          value={activeSubject}
          onValueChange={(value) => {
            setActiveSubject(value as Subject);
            setCurrentPage(1);
          }}
          className="mx-auto mb-8"
        >
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
            {subjects.map(subject => (
              <TabsTrigger 
                key={subject} 
                value={subject}
                className="capitalize"
              >
                {subject}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {subjects.map(subject => (
            <TabsContent key={subject} value={subject} className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-muted-foreground">
                  Showing {indexOfFirstQuestion + 1}-{Math.min(indexOfLastQuestion, currentQuestions.length)} of {currentQuestions.length} questions
                </div>
              </div>
              
              <div className="space-y-4">
                {currentQuestionsPage.map((question: Question) => (
                  <Card key={question.id} className="shadow-sm">
                    <CardContent className="pt-6">
                      <div 
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleQuestion(question.id)}
                      >
                        <div className="pr-4">
                          <h3 className="font-medium">{question.text}</h3>
                        </div>
                        <div>
                          {expandedQuestions[question.id] ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                      
                      {expandedQuestions[question.id] && (
                        <div className="mt-4 space-y-3">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Option</TableHead>
                                <TableHead>Answer</TableHead>
                                <TableHead>Correct</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {question.options.map((option, index) => (
                                <TableRow key={index} className={option === question.correctAnswer ? "bg-green-50" : ""}>
                                  <TableCell>{String.fromCharCode(65 + index)}</TableCell>
                                  <TableCell>{option}</TableCell>
                                  <TableCell>
                                    {option === question.correctAnswer ? "✓" : ""}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                          
                          {question.imageUrl && (
                            <div className="py-2">
                              <img 
                                src={question.imageUrl} 
                                alt={`Visual for question ${question.id}`} 
                                className="mx-auto rounded-md max-h-48 object-contain"
                              />
                            </div>
                          )}
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">
                              <span className="font-medium">Explanation: </span>
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        isDisabled={currentPage === 1}
                      />
                    </PaginationItem>
                    
                    {renderPaginationLinks()}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                        isDisabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default QuestionsPage;
