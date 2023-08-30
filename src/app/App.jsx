import "../app/App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

function App() {
  //<ListItem text="Inbox" icon={<FaInbox />} active={true} />

  const generalLists = [
    { id: 1, text: "inbox",icon: <FaInbox />, active: true },
    { id: 2, text: "Today",icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days",icon: <FaCalendarAlt />, active: false },
  ];

  //<ListItem text="Project-A" icon={<FaInbox />} active={true} />
  //<ListItem text="Project-B" icon={<FaInbox />} active={false} />
  const projectLists =[
    { id:4, text: "Project-A", icon:<FaInbox/>, active:true},
    { id:5, text: "Project-B", icon:<FaInbox/>, active:false},
  ]
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__cartegory">
            <ul className="list">
              {generalLists.map((obj) => <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active}/> )}


            </ul>
          </section>
          <section className="sidebar__cartegory">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* List */}
              <ul className="lists">
                {projectLists.map((obj) => <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />)}

              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
