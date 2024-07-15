"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
export default function Home() {
  const today = new Date();
  const tomorrow = new Date(new Date(today).setDate(today.getDate() + 10));

  return (
    <div className="app">
      <h1 className="text-center">React Calendar with Range</h1>
      <div className="calendar-container">
        <Calendar selectRange={true} value={[today, tomorrow]} locale="ja-JP" />
      </div>
    </div>
  );
}
