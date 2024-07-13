"use client";

import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar value={new Date()} />
    </div>
  );
}
