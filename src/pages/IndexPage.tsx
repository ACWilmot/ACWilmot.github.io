
import React from 'react';
import { Layout } from '@/components/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Education Platform</h1>
        <p className="text-xl mb-8">Helping students practice and improve their skills</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add more content here later */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
