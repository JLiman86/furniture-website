import { newInStore } from "../data";
import StoreSlider from "./StoreSlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="text-primary">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 ">
        <div>
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="font-semibold mt-3 mb-7">{subtitle}</p>
          <div className="items-center hidden lg:flex">
            {link} <div>{icon}</div>
          </div>
        </div>
        <div className="overflow-hidden md:flex-1">
          <StoreSlider />
        </div>
      </div>
    </section>
  );
};

export default NewItems;
