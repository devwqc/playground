import clsx from 'clsx';

const Spinner = () => {
  return (
    <div
      className={clsx(
        'h-[120px] w-[120px]',
        'border-[16px] border-solid border-[#F3F3F3] border-t-[#3497DB]',
        'rounded-full',
        'animate-spin',
      )}
    />
  );
};

export default Spinner;
