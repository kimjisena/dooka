import Image from "next/image";
import { type StaticImageData } from "next/image";

export type TestimonyCardProps = {
  img: StaticImageData,
  info: {
    name: string,
    title: string,
  },
  msg: string,
};

export default function TestimonyCard ({ img, info, msg }: TestimonyCardProps) {
  return (
  <div className={`flex flex-col items-center justify-between`}>

    <Image src={img} alt="Kim Jisena" width={128} height={128} className={`rounded-full`} />

    <h1 className={`text-2xl`}>
      {info.name}
    </h1>
    <h2 className={`text-sm italic`}>
      {info.title}
    </h2>
    <hr className={`w-2/3 bg-content-dark h-[2px]`} />
    <p className={`text-lg`}>
      "{msg}"
    </p>
  </div>
  );
}