import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  // find item
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  // mouse leave function
  const subMenuContainer = useRef();
  const mouseLeave = (event) => {
    const { clientX, clientY } = event;
    const { left, right, top, bottom } =
      subMenuContainer.current.getBoundingClientRect();
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  // return
  return (
    <div
      className={pageId ? "submenu show-submenu" : "submenu"}
      onMouseLeave={mouseLeave}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, label, icon, url }) => {
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
