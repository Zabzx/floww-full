import Home from "./Home";
import '../Sidebar.css';
import Topics from "./Topics";
import Notifications from "./Notifications";
import Inbox from "./Inbox";

function Sidebar() {
    return (
        <div className="sidebar">
        <Home/>
        <Topics/>
        <Notifications/>
        <Inbox/>
        </div>
    )
}

export default Sidebar;