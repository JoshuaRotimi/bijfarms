import { Button } from "flowbite-react";
import farm from "../assets/farm-1.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-100 p-3 min-h-[80vh]">
      <div className="container flex flex-col lg:flex-row items-center justify-between py-20 mx-auto gap-8">
        <div className="text-left lg:w-1/2">
          <h1 className=" text-3xl lg:text-5xl font-semibold">BIJ Farms</h1>
          <p className="text-lg py-4 font-light">
            Our company believes in the core values of customer satisfaction,
            quality produce and integrity, as these values shape our employees
            and farm products.
          </p>
          <p className="py-4 font-bold italic">
            Ready to explore our products?
          </p>
          <Button color={"dark"} className={"w-fit"}>
            <a href="#contact">Contact us</a>
          </Button>
        </div>
        <div className="lg:w-1/2 lg:px-4">
          <img src={farm} alt="Subsection of the farm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
