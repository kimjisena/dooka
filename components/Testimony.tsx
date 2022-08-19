import styles from "../styles/Testimony.module.css";
import TestimonyCard, { type TestimonyCardProps } from "./TestimonyCard";
import kimPic from '../public/kim.jpg';

const testimonies: TestimonyCardProps[] = [
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
]

export default function Testimony () {
  return (
    <div id="testimony-display" className={`relative overflow-hidden w-4/5 h-72 md:h-64 rounded-lg`}>
      <div className={`absolute w-full h-full bg-violet-light z-40 ${styles.slideFive} p-4`}>
        <TestimonyCard img={testimonies[0].img} info={testimonies[0].info} msg={testimonies[0].msg} />
      </div>
      <div className={`absolute w-full h-full bg-violet-light z-30 ${styles.slideFour} p-4`}>
        <TestimonyCard img={testimonies[0].img} info={testimonies[0].info} msg={testimonies[0].msg} />
      </div>
      <div className={`absolute w-full h-full bg-violet-light z-20 ${styles.slideThree} p-4`}>
        <TestimonyCard img={testimonies[0].img} info={testimonies[0].info} msg={testimonies[0].msg} />
      </div>
      <div className={`absolute w-full h-full bg-violet-light z-10 ${styles.slideTwo} p-4`}>
        <TestimonyCard img={testimonies[0].img} info={testimonies[0].info} msg={testimonies[0].msg} />
      </div>
      <div className={`absolute w-full h-full bg-violet-light z-0 ${styles.slideOne} p-4`}>
        <TestimonyCard img={testimonies[0].img} info={testimonies[0].info} msg={testimonies[0].msg} />
      </div>
    </div>
  );
}