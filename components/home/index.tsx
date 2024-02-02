import { EveryDayText } from '@components/components/EveryDayText';

export function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-center text-3xl font-extrabold md:text-4xl mt-8">
          <span>Hi, I'm Akong</span>
        </h1>
      </div>
      <EveryDayText />
    </div>
  );
}
