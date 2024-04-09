import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const mouseLeave = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={mouseLeave}>
      <div className="nav-center">
        <h3 className="logo">zero tech</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <GiHamburgerMenu />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
