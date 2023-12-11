import { stats } from "../data";

const StatsBar = () => {
  return (
    <ul className="bg-accent rounded-2xl p-8 grid gap-y-3 grid-cols-2 md:grid-cols-4 w-4/5 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 ">
      {stats.map((stat) => (
        <li className="text-center border-white odd:border-r-2 md:border-r-2 md:last:border-transparent ">
          <h3 className="text-4xl mb-3">{stat.value}</h3>
          <p className="text-sm">{stat.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default StatsBar;
