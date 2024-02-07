import Head from 'next/head';

import Reset from '../../styles/Reset';
import Footer from '../Footer';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hello NEXT!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />
 
      <main>{children}</main>
 
    </>
  );
};

export default Layout;
