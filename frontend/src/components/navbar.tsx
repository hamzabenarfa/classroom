import { Link } from "react-router-dom";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b text-black">
      <Logo />
      {/* <ul className="hidden md:flex  font-semibold text-lg md:text-xl gap-4">
        <Link to="/responsable/plant">demo farmer</Link>
        <li>plante</li>
        <li>plante</li>
      </ul> */}
      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
