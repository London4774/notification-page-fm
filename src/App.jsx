import { useState } from "react";
import Header from "./components/Header/Header";
import data from "./components/NotifDataBase";
import NotifItems from "./components/NotifItems/NotifItems";

function App() {
  const [notifications, setNotifications] = useState(data);

  const unreadMessages = notifications.filter((item) => item.isUnread).length;

  const markAllRead = () => {
    const updatedData = notifications.map((n) => ({ ...n, isUnread: false }));
    setNotifications(updatedData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 mb-8 bg-white border-white shadow-sm rounded-xl px-2 md:px-0">
      <Header onMarkAll={markAllRead} unreadMsg={unreadMessages} />
      <NotifItems items={notifications} />
    </div>
  );
}

export default App;
