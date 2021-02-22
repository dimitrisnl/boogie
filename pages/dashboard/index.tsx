import {GetServerSideProps} from 'next';
import {getSession} from 'next-auth/client';
import React from 'react';

import Layout from '@/components/admin/Layout';

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = await getSession({req});

  if (!session) {
    res.writeHead(302, {Location: '/api/auth/signin'});
    res.end();
    return {props: {}};
  }

  return {props: {}};
};

const Index: React.FC = () => {
  return (
    <Layout title="Index">
      <main>Hi</main>
    </Layout>
  );
};

export default Index;
