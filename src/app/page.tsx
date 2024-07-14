"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Home() {
  return (
    <Calendar
      value={new Date()}
      locale="ja-JP"
      next2Label=""
      onClickDay={(value, event) => {
        console.log(value);
      }}
    />
  );
}
