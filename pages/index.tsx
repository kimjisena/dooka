import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import ContinueButton from '../components/ContinueButton';
import StarRating from '../components/StarRating';
import Testimony from '../components/Testimony';
import SlideIndicator from '../components/SlideIndicator';

const Home: NextPage = () => {
  const [next, setNext] = useState(0);

  const handleSlides = (id: 'left' | 'right') => {
    setNext((n) => {

      switch(id) {
        case 'left':
          if (n - 1 < 0) {
            return 4;
          } else {
            return n - 1;
          }

        case 'right':
          if (n + 1 > 4) {
            return 0;
          } else {
            return n + 1;
          }
      }
    });
  }

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
        <h2 className={`text-5xl font-bold flex flex-col items-center border-y-4 border-white text-content-dark`}>
          <span className={`py-2`}>the inventory</span>
          <span className={`py-2`}>manager</span>
          <span className={`py-2`}>loved by</span>
          <span className={`py-2`}>retailers</span>
        </h2>
        <h3 className={`text-content-dark text-3xl p-2`}>We manage it. You earn.</h3>
        <ContinueButton />
      </section>

      <section id='reviews' className={`flex flex-col items-center p-4 bg-background-dark text-content-dark mt-2`}>
        <StarRating />
        <Testimony index={next} callback={handleSlides} />
        <SlideIndicator show={next} />
      </section>

      <section id='features' className={`flex flex-col items-center p-4 bg-background-dark text-content-dark mt-2`}>
        features
      </section>
    </main>
  );
}

export default Home;