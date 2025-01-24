import * as React from "react";
import Calendar from "@cloudscape-design/components/calendar";
import "./calendar.css"

const BigCalendar = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="calendar-container">
      <Calendar
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
      />
    </div>
  );
}

export default BigCalendar