import { Navbar } from "flowbite-react";

export default function DefaultNavbar() {
  return (
    <div className="p-4 bg-white shadow-lg z-50">
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            LOGO
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="text-lg" href="#">
            Home
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#about">
            About
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#products">
            Products
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
