import "./ListItem.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
/**
 props = {
    text : string
    icon : <Component/>
    active: boolean
 }
 */
function ListItem(props) {
  console.log(props);
  const listClassName = `list__item ${props.active ? "active" : ""}`;
  // active = fasle -> textClassName = "list__item"
  // active = true ->textClassName = "list__item active"
  return (
    <li className={listClassName}>
      {props.icon}

      <p className='list__item__text'>{props.text}</p>
    </li>
  );
}

// CSS + JS Value == Dynamics ClassName
// not-active : className="list__item"
// active : className="list__item active"
export default ListItem;
