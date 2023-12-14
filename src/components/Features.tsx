import { features } from "../data";

const Features = () => {
  const { image, title, subtitle, items } = features;
  return (
    <section>
      <div className="container mx-auto text-primary pt-40 pb-10 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-1 lg:-order-1">
            <img className="w-full" src={image.type} alt="" />
          </div>
          <div className="">
            <h2 className="text-4xl font-semibold mt-5">{title}</h2>
            <p className="mt-6 mb-10">{subtitle}</p>
            <div className="">
              {items.map((item, idx) => {
                const { icon, title, subtitle } = item;
                return (
                  <div key={idx} className="flex gap-4 items-start mb-5">
                    <div className="text-2xl p-1">{icon}</div>
                    <div>
                      <h3 className=" text-xl font-semibold">{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
