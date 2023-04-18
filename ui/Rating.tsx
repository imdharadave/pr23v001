import clsx from 'clsx';

type Props = {
  rate?: number;
};

const Rating = ({ rate = 0 }: Props) => {
  return (
    <div className="mb-4 flex flex-row gap-2">
      {[1, 2, 3, 4, 5].map((x) => (
        <div
          key={x}
          className={clsx('mask mask--star h-5 w-5  bg-secondary1', {
            'bg-neutral-200': x > rate,
          })}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
