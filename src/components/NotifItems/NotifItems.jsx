export default function NotifItems({ items }) {
  const renderTarget = (item) => {
    if (item.privateMessage) {
      return (
        <div className="bg-white border border-gray-500 text-gray-600 px-3 py-4 mt-2 rounded hover:bg-navy-100 hover:text-gray-700">
          {item.target}
        </div>
      );
    }

    if (item.targetImage) {
      return (
        <img
          className="relative w-12 h-12 rounded flex-1 left-[95%] "
          src={item.targetImage}
          alt=""
        />
      );
    }

    if (item.isBold && item.isClub) {
      return (
        <span className="text-blue-950 font-bold hover:text-navy-950 cursor-pointer">
          {item.target}
        </span>
      );
    }

    if (item.isBold) {
      return (
        <span className="text-blue-950 font-bold hover:text-navy-950 cursor-pointer">
          {item.target}
        </span>
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-2">
      {items.map((item) => (
        <div
          key={item.id}
          className={`max-w-2xl mx-auto flex items-start p-4 mb-3 rounded-xl ${item.isUnread ? "bg-navy-50" : "bg-white"}`}
        >
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src={item.avatar}
            alt=""
          />

          <div className="flex-1 mx-3">
            <div className="leading-tight text-[16px]">
              <span className="font-bold hover:text-blue-950">
                {item.username}{" "}
              </span>
              <span className="text-gray-600"> {item.action} </span>

              {!item.privateMessage && !item.targetImage && renderTarget(item)}

              {item.isUnread && (
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 ml-2"></span>
              )}
            </div>

            <p className="text-gray-500 text-sm">{item.time}</p>
            {item.privateMessage && renderTarget(item)}
          </div>

          {item.targetImage && (
            <img
              className="w-12 h-12 rounded cursor-pointer hover:ring-2 ring-blue-200 transition-all shrink-0"
              src={item.targetImage}
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
}
