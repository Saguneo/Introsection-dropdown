import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <Sidebar toggle={toggle} toggler={toggler} />
      </header>
    </>
  );
}
