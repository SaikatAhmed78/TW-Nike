import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

const SuparQuality = () => {
  return (

    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
          Step Into  
          <span className="text-coral-red"> Exceptional </span>
          <span className="text-coral-red"> Craftsmanship </span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
           Experience footwear redefined — engineered for performance, precision, and premium aesthetics. Every pair is a bold expression of innovation and timeless design.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          From intricate detailing to superior materials, we obsess over perfection — so you can move with confidence, style, and comfort in every step.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product details"
          className="object-contain"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuparQuality;
