import { IconType } from "react-icons";

export type SliderButtonProps = {
  id: 'left' | 'right',
  pos: string,
  Icon: IconType,
  callback: (id: 'left' | 'right') => void,
};

export default function SliderButton ({ Icon, callback, pos, id }: SliderButtonProps) {
  return (
    <div onClick={() => callback(id)} className={`absolute rounded-md bg-primary hover:bg-success-dark hover:cursor-pointer hover:text-content-light active:shadow-success-dark active:shadow-sm ${pos} z-20 w-10 h-10 md:w-12 md:h-12 flex flex-row justify-center items-center`}>
      <Icon size={`32`} />
    </div>
  );
}