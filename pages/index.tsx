import type { NextPage } from 'next';
import Head from 'next/head';
import ContinueButton from '../components/ContinueButton';

const Home: NextPage = () => {

  return (
    <main className={`w-full mt-24 md:w-4/5 mx-auto mb-4`}>
      <Head>
        <title>dooka - inventory manager</title>
        <meta name="description" content="dooka - The inventory manager loved by retailers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='introduction' className={`flex flex-col items-center p-4 bg-background-dark`}>
        <h1 className={`font-bold text-8xl text-content-dark pb-2`}>
          dooka
        </h1>
        <h2 className={`text-5xl flex flex-col items-center border-y-4 border-white text-content-dark`}>
          <span className={`py-2`}>the inventory</span>
          <span className={`py-2`}>manager</span>
          <span className={`py-2`}>loved by</span>
          <span className={`py-2`}>retailers</span>
        </h2>
        <ContinueButton />
      </section>

      <section id='reviews' className={`flex flex-col items-center p-4`}>
        user reviews
      </section>

      <section id='features' className={`flex flex-col items-center p-4`}>
        features
      </section>
    </main>
  );
}

export default Home;