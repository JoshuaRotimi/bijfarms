const Contact = () => {
  return (
    <section
      id={"contact"}
      className="bg-blue-100 mx-auto py-8 p-4 text-center flex flex-col justify-center gap-12 min-h-[60vh]"
    >
      <h2 className="text-2xl font-semibold md:text-3xl">Contact Us</h2>
      <p className="font-light p-4 md:w-[60%] mx-auto text-base lg:text-lg">
        Reach out to us to find out more information or how you can make
        purchases.
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="min-h-[150px] w-[300px] bg-white px-4 py-3 shadow-lg rounded-md flex flex-col justify-center gap-2">
          <h5 className="md:text-lg font-semibold">Address</h5>
          <p>123 Suku Road, Ayetoro Gbede, Kogi State.</p>
          <p>
            Monday - Saturday <b>(8am - 6pm)</b>
          </p>
        </div>

        <div className="min-h-[150px] w-[300px] bg-white px-4 py-3 shadow-lg rounded-md flex flex-col justify-center gap-2">
          <h5 className="md:text-lg font-semibold">Phone</h5>
          <p>+234 819034889</p>
          <p>+234 123245385</p>
        </div>

        <div className="min-h-[150px] w-[300px] bg-white px-4 py-3 shadow-lg rounded-md flex flex-col justify-center gap-2">
          <h5 className="md:text-lg font-semibold">Email</h5>
          <p>admin@bijfarms.com</p>
          <p>customerservice@bijfarms.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
