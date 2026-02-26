import { useState, useEffect } from "react";
import "./Planner.css";

export default function Planner() {
  const [currentTime, setCurrentTime] = useState(null);
  const [holidays, setHolidays] = useState([]);
  const [loadingTime, setLoadingTime] = useState(false);
  const [loadingHolidays, setLoadingHolidays] = useState(false);
  const [errorTime, setErrorTime] = useState("");
  const [errorHolidays, setErrorHolidays] = useState("");

 

  const fetchTime = async () => {
    setLoadingTime(true);
    setErrorTime("");

    try {
      const response = await fetch(
        "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata"
      );

      if (!response.ok) throw new Error("Failed to fetch time");

      const data = await response.json();

      setCurrentTime(data);
    } catch {
      setErrorTime("Failed to fetch current time");
    } finally {
      setLoadingTime(false);
    }
  };



  const fetchHolidays = async () => {
    setLoadingHolidays(true);
    setErrorHolidays("");

    try {
      const year = new Date().getFullYear();

      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?api_key=StyDoB2c7ijZJHpm8CXkBhFlmxySEKDg&country=IN&year=${year}`
      );

      if (!response.ok) throw new Error("Failed to fetch holidays");

      const data = await response.json();

      
      const holidayList = data.response.holidays.map((h) => ({
        localName: h.name,
        date: h.date.iso
      }));

      setHolidays(holidayList);
    } catch {
      setErrorHolidays("Failed to fetch holidays");
    } finally {
      setLoadingHolidays(false);
    }
  };

  

  useEffect(() => {
    fetchTime();
    fetchHolidays();
  }, []);

 

  const formatDateTime = () => {
    if (!currentTime) return { date: "N/A", time: "N/A", day: "N/A" };

    const dt = new Date(currentTime.dateTime);

    const date = dt.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const time = dt.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const day = dt.toLocaleDateString("en-US", { weekday: "long" });

    return { date, time, day };
  };

  const { date, time, day } = formatDateTime();

 

  const upcomingHolidays = holidays
    .filter((h) => new Date(h.date) >= new Date())
    .slice(0, 5);

  const daysUntil = (dateStr) => {
    const today = new Date();
    const holiday = new Date(dateStr);
    return Math.ceil((holiday - today) / (1000 * 60 * 60 * 24));
  };

  

  return (
    <div className="container mt-5 mb-5">
      <div className="planner-container">

        <div className="planner-header text-center">
          <h2 className="planner-title">🗓️ Day Planner</h2>
          <p className="planner-subtitle">
            Stay organized with time and upcoming holidays 🌼
          </p>
        </div>

        
        <div className="time-section">
          <h3>⏰ Current Time</h3>

          {loadingTime && <p>Loading time...</p>}

          {errorTime && (
            <div>
              <p>{errorTime}</p>
              <button onClick={fetchTime}>Retry</button>
            </div>
          )}

          {currentTime && !loadingTime && (
            <div className="time-card">
              <h2>{time}</h2>
              <p>{date}</p>
              <p>{day}</p>
              <p>{currentTime.timeZone}</p>

              <button onClick={fetchTime}>Refresh</button>
            </div>
          )}
        </div>

        
        <div className="holiday-section">
          <h3>🎉 Upcoming Holidays</h3>

          {loadingHolidays && <p>Loading holidays...</p>}

          {errorHolidays && (
            <div>
              <p>{errorHolidays}</p>
              <button onClick={fetchHolidays}>Retry</button>
            </div>
          )}

          {upcomingHolidays.length > 0 && (
            <div className="holiday-list">
              {upcomingHolidays.map((h, i) => (
                <div key={i} className="holiday-card">
                  <h4>{h.localName}</h4>
                  <p>{h.date}</p>
                  <p>In {daysUntil(h.date)} days</p>
                </div>
              ))}
            </div>
          )}

          {!loadingHolidays && upcomingHolidays.length === 0 && (
            <p>No upcoming holidays found.</p>
          )}
        </div>

      </div>
    </div>
  );
}