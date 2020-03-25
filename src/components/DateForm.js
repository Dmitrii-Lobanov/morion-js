import React, { useEffect } from 'react';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDate } from "../actions";

function DateForm({ 
  startDate, 
  handleChange, 
  disabled, 
  handleDisabled,
  getDate
}) {
  const currentDay = new Date().getDate();
  const currentMonth = (new Date().getMonth() > 9) ? (new Date().getMonth() + 1) : `0${new Date().getMonth() + 1}`;
  const currentYear = new Date().getFullYear();
  const currentDate  = `${currentDay}.${currentMonth}.${currentYear}`;

  useEffect(() => {
    getDate(currentDate);
  }, []);

  const onFormSubmit = (e) => {
    if(e) e.preventDefault();
    if(!startDate || startDate.length < 1) alert('Выберите дату');
    
    const chosenDay = startDate.getDate();
    const chosenMonth = startDate.getMonth() > 9 ? (startDate.getMonth() + 1) : (`0${startDate.getMonth() + 1}`);
    const chosenYear = startDate.getFullYear();
    const chosenDate = `${chosenDay}.${chosenMonth}.${chosenYear}`;

    getDate(chosenDate);
  }

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
          <div className="calendar-footer">{`Сегодня ${currentDate}`}</div>
        </DatePicker>
      </form>
      <div>
        <button onClick={handleDisabled} className="button--disable">{disabled ? 'Disabled' : 'Not disabled'}</button>
        <button onClick={onFormSubmit} className="button--submit">Submit</button>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getDate }
)(DateForm);

export { DateForm };