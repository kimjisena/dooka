import TestimonyCard, { type TestimonyCardProps } from "./TestimonyCard";
import kimPic from '../public/kim.jpg';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SliderButton from "./SliderButton";

const testimonies: TestimonyCardProps[] = [
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
  {
    img: kimPic,
    info: {
      name: 'Kim Jisena',
      title: 'Small business owner',
    },
    msg: 'I was struggling to keep track of my inventory. With dooka, that\'s no longer the case.'
  },
]

export default function Testimony ({ index, callback }: { index: number, callback: (id: 'left' | 'right') => void }) {
  return (
    <div id="testimony-display" className={`relative w-4/5 h-72 md:h-64 rounded-lg mb-2`}>
      <div className={`w-full h-full bg-violet-light p-4`}>
        <TestimonyCard img={testimonies[index].img} info={testimonies[index].info} msg={testimonies[index].msg} />
      </div>
      <SliderButton Icon={BsChevronLeft} callback={callback} pos={`-left-3 top-[40%]`} id={`left`} />
      <SliderButton Icon={BsChevronRight} callback={callback} pos={`-right-3 top-[40%]`} id={`right`} />
    </div>
  );
}