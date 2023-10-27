import banana from "../assets/banana-2.jpg";
import palm from "../assets/palm-fruits.jpg";
import fruits from "../assets/fruits.jpg";
import pathway from "../assets/farm-2.jpg";
import maize from "../assets/maize.jpg";
import maizeplant from "../assets/maize-2.jpg";
import lemon from "../assets/lemon.jpg";
import tomato from "../assets/tomato.jpg";
import tomatoripe from "../assets/tomato-ripe.jpg";
import plantain from "../assets/plantain.jpg";

const images = [
  plantain,
  fruits,
  palm,
  maizeplant,
  lemon,
  maize,
  tomatoripe,
  pathway,
  tomato,
];

const Products = () => {
  return (
    <section
      id={"products"}
      className="flex flex-col text-center mx-auto py-12"
    >
      <h1 className="text-2xl font-semibold md:text-5xl">Our Products</h1>
      <p className="font-light p-4 lg:w-[60%] mx-auto text-base lg:text-lg">
        We have a wide range of farm products also available for purchase
        including yams, fruits, maize etc. Check out some of our farm produce
        below.
      </p>
      <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <div className="relative" key={idx}>
            <img
              src={image}
              alt="Image 1"
              className="w-full h-auto max-h-[350px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
