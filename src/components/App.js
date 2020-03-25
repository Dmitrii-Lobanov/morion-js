import React, { useState } from 'react';
import '../App.scss';
import DateForm from './DateForm';
import ShowRedux from './ShowRedux';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [disabled, setDisabled] = useState(false);

  function handleChange(data) {
    setStartDate(data);
  }

  function handleDisabled() {
    setDisabled(!disabled);
  }

  function onFormSubmit(e) {
    if(e) e.preventDefault();
    console.log(startDate.getDate());
  }

  return (
    <div className="App">
      <DateForm 
        startDate={startDate} 
        disabled={disabled}
        handleChange={handleChange}
        handleDisabled={handleDisabled}
        onFormSubmit={onFormSubmit}
      />
      <ShowRedux />
    </div>
  );
}

export default App;