import { Footer } from "flowbite-react";

const AppFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="BIJ Logo"
            name="BIJ Farms"
            src="/vite.svg"
            className={"my-4"}
          />
          <Footer.LinkGroup className={"flex justify-between"}>
            <Footer.Link href="#about">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#products">Products</Footer.Link>
            <Footer.Link href="#contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="BIJ™" href="#" year={2023} />
      </div>
    </Footer>
  );
};

export default AppFooter;
