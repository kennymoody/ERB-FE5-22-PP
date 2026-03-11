import { menuLists } from "../../dataV2";

const MenuList = ({ onItemClick }) => {
  return menuLists.map((menulist) => (
    <a
      key={menulist.id}
      onClick={onItemClick}
      href={menulist.url}
      className={menulist.url === window.location.pathname ? "active" : ""}
    >
      {menulist.title}
    </a>
  ));
};

export default MenuList;
