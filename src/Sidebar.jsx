import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "./Context";
import sublinks from "./data.jsx";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-button" onClick={closeSidebar}>
          <IoMdClose />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
