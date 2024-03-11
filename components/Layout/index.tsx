import Head from 'next/head';
import { PropsWithChildren } from 'react';

import Reset from '../../styles/Reset';

const Layout: React.FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <>
      <Head>
        <title>개발자 황승현</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />

      <main>{children}</main>
    </>
  );
};

export default Layout;
