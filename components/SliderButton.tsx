import { IconType } from "react-icons";

export type SliderButtonProps = {
  id: 'left' | 'right',
  pos: string,
  Icon: IconType,
  callback: (id: 'left' | 'right') => void,
};

export default function SliderButton ({ Icon, callback, pos, id }: SliderButtonProps) {
  return (
    <div onClick={() => callback(id)} className={`absolute bg-primary hover:bg-success-dark hover:cursor-pointer active:text-content-light active:shadow-success-dark active:shadow-md ${pos} z-20 w-12 h-12 flex flex-row justify-center items-center`}>
      <Icon size={`32`} />
    </div>
  );
}