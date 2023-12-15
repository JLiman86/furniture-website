import { features } from "../data";

const FeaturesSecond = () => {

  const { image, title, subtitle } = features.feature2;
  return (
    <section>
      <div className="container mx-auto text-primary py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-1 lg:-order-1">
            <img className="w-full" src={image.type} alt="" />
          </div>
          <div className="">
            <h2 className="text-4xl font-semibold mt-5">{title}</h2>
            <p className="mt-6 mb-10">{subtitle}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
