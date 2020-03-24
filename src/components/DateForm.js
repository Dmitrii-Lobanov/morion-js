import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateForm({ 
  startDate, 
  handleChange, 
  disabled, 
  handleDisabled,
  onFormSubmit
}) {
  const currentDay = new Date().getDate();
  const currentMonth = (new Date().getMonth() > 9) ? (new Date().getMonth() + 1) : `0${new Date().getMonth() + 1}`;
  const currentYear = new Date().getFullYear();
  const displayDate  = `Сегодня ${currentDay}.${currentMonth}.${currentYear}`

  return (
    <div className="container">
      <form>
        <label htmlFor="date">Дата: </label>
        <DatePicker 
          className="datepicker"
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={handleChange}
          placeholderText={"Нажмите для выбора даты" || startDate}
          disabled={disabled}
          isClearable
      >
          <div className="calendar-footer">{displayDate}</div>
        </DatePicker>
      </form>
      <div>
        <button onClick={handleDisabled} className="button--disable">{disabled ? 'Disabled' : 'Not disabled'}</button>
        <button onClick={onFormSubmit} className="button--submit">Submit</button>
      </div>
    </div>
  )
}
