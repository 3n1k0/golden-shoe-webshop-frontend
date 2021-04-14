import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarElements";

const FullNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default FullNavbar;
