import clsx from 'clsx';

const ThreeDots = () => (
  <div className={clsx('w-fit', 'flex items-center gap-2')}>
    <div
      className={clsx(
        'h-[60px] w-[60px]',
        'bg-[#3497DB]',
        'animate-pulse rounded-full [animation-delay:0s] [animation-duration:1.5s]',
      )}
    ></div>
    <div
      className={clsx(
        'h-[60px] w-[60px]',
        'bg-[#3497DB]',
        'animate-pulse rounded-full [animation-delay:0.5s] [animation-duration:1.5s]',
      )}
    ></div>
    <div
      className={clsx(
        'h-[60px] w-[60px]',
        'bg-[#3497DB]',
        'animate-pulse rounded-full [animation-delay:1s] [animation-duration:1.5s]',
      )}
    ></div>
  </div>
);

export default ThreeDots;
