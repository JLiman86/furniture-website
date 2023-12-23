import TestimonialSlider from "./TestimonialSlider";
import { testimonial } from "../data";

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className="text-primary">
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:max-w-[50%]">
            <h2 className="text-2xl font-semibold mb-10">{title}</h2>
            <TestimonialSlider />
          </div>
          <div className="order-1">
            <img className="w-full" src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
