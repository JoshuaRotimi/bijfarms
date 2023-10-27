import { Card } from "flowbite-react";
import palm from "../assets/palmfruits.jpg";
import harvest from "../assets/harvest.jpg";

const About = () => {
  return (
    <section id={"about"} className="flex flex-col text-center mx-auto py-12">
      <div>
        <h1 className="text-2xl font-semibold md:text-5xl">
          About Our Company
        </h1>
        <p className="font-light p-4 lg:w-[60%] mx-auto text-base lg:text-lg">
          BIJ Suku farms is a family-owned business founded in 2016 and located
          in Kogi State, Nigeria. In our years of operation, we have provided
          quality services to our customers,and we pride ourselves in growing
          quality farm products including our flagship product of{" "}
          <b className="font-semibold text-lg lg:text-xl">
            BIJ Palm Kernel Oil
          </b>{" "}
          which is produced and processed from our locally grown palm fruits.
        </p>
      </div>
      <div className="p-6 md:p-3">
        <div
          className="flex flex-col gap-8 md:flex-row md:gap-4
        justify-between items-center max-w-[100%] overflow-hidden"
        >
          <Card imgAlt="BIJ Palm fruits being harvested" imgSrc={palm}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>BIJ Palm Fruits</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Our palm fruits shortly before being harvested and processed by
              our farmers
            </p>
          </Card>

          <Card imgAlt="BIJ Rice harvesting" imgSrc={harvest}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>BIJ Rice</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Local Rice being harvested and stacked in heaps by our farmers
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
