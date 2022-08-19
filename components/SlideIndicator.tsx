export default function SlideIndicator ({ show }: { show: number }) {
  return (
    <div className={`flex flex-row justify-between items-center w-24`}>
      <div className={`${show === 0 ? 'w-3 h-3 animate-pulse': 'w-2 h-2'} rounded-full bg-violet-light`}></div>
      <div className={`${show === 1 ? 'w-3 h-3 animate-pulse': 'w-2 h-2'} rounded-full bg-violet-light`}></div>
      <div className={`${show === 2 ? 'w-3 h-3 animate-pulse': 'w-2 h-2'} rounded-full bg-violet-light`}></div>
      <div className={`${show === 3 ? 'w-3 h-3 animate-pulse': 'w-2 h-2'} rounded-full bg-violet-light`}></div>
      <div className={`${show === 4 ? 'w-3 h-3 animate-pulse': 'w-2 h-2'} rounded-full bg-violet-light`}></div>
    </div>
  );
}