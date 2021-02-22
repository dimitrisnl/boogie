import React, {ReactNode} from 'react';

import Header from './Header';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <div className="h-full flex-grow flex flex-col">
      <Header />
      <header className="bg-white shadow relative">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main className="bg-gray-100 h-full flex-1">
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
