
import React from 'react';
import Header from '@/components/Header';

interface LoadingProps {
  message: string;
}

const LoadingState: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <div className="animate-pulse text-center">
        <h2 className="text-xl font-display mb-6">{message}</h2>
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export const QuizLoadingStates = {
  AuthChecking: () => <LoadingState message="Initializing..." />,
  QuestionsLoading: () => <LoadingState message="Loading questions..." />
};

