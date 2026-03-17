import { socialLists } from "../../data";
const SocialList = () => {
  return socialLists.map((sociallist) => (
    <li key={sociallist.id}>
      <a href={sociallist.url} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={sociallist.icon}></i>
      </a>
    </li>
  ));
};

export default SocialList;
