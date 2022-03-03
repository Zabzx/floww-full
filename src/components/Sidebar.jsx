import '../Sidebar.css';

function side() {
    return (
        <div className="sidebar">
        <div className="home-component sidebar-component">
            <i className="fas fa-home"></i>
            <h1>Home</h1>
        </div>

        <div className="sidebar-component inbox-component">
            <i className="fas fa-inbox"></i>
            <h1>Inbox</h1>
        </div>

        <div className="notification-component sidebar-component">
            <i className="fas fa-bell"></i>
            <h1>Notifications</h1>
        </div>

        <div className="topic-component sidebar-component">
            <i className="far fa-comment-dots"></i>
            <h1>Topics</h1>
        </div>

        </div>
    )
}

export default side