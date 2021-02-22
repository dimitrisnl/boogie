import Link from 'next/link';
import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col space-y-4">
      <span className="text-9xl font-bold">Next Skeleton</span>
      <Link href="/dashboard">
        <a className="bg-blue-600 rounded-full px-4 py-2 text-white text-sm">
          Dashboard
        </a>
      </Link>
    </div>
  );
};

export default Index;
