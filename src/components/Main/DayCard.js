import React from "react";
import moment from "moment";
import "./DayCard.css"
function DayCard({day, month, year, openModal }) {
    const isToday = moment().isSame(day, "day"); 
    const isCurrentMonth = day.month() === month;

    
  
    return (
      <section onClick={() => openModal(day)} 
        className={`day-card ${isToday ? "day-card--today" : ""} ${
          !isCurrentMonth ? "day-card--inactive" : ""
        }`}
      >
        {day.format("D")}
      </section>
    );
  }

export default DayCard;
