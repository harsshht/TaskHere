import React, { useState, useEffect } from "react";

export const DateAndTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const displayDateTime = () => {
    const day = currentTime.toLocaleDateString(undefined, { weekday: "long" });
    const date = currentTime.toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = currentTime.toLocaleTimeString();

    return (
      <div>
        <div>
          {day}, {date}
        </div>
        <div>{time}</div>
      </div>
    );
  };

  return (
    <div className="DateAndTime">

      <div className="datetime">{displayDateTime()}</div>

      {/* ... */}
    </div>
  );
};
