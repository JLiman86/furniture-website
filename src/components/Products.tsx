import { products } from "../data";
import ProductSlider from "../components/ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="text-primary">
      <div className="container mx-auto py-10">
        <div>
          <h2 className="text-3xl font-semibold text-center">{title}</h2>
          <p className="max-w-[650px] mx-auto my-10 ">{subtitle}</p>
        </div>
        <ProductSlider/>
      </div>
    </section>
  );
};

export default Products;
