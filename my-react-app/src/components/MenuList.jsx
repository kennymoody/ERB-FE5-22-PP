import { menuLists } from "../../data";

const MenuList = ({ onItemClick }) => {
  return menuLists.map((menulist) => (
    <li key={menulist.id} onClick={onItemClick}>
      <a href={menulist.url}>{menulist.title}</a>
    </li>
  ));
};

export default MenuList;
