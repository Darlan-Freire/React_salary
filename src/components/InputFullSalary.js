import React from 'react';

export default function InputFullSalary({ currentValue, onSalaryChange }) {
  const handleInputChange = (event) => {
    const newValue = Number(event.target.value);
    onSalaryChange(newValue);
  };
  return (
    <div className="input-field col s12">
      <input
        autoFocus
        id="inputFullSalary"
        type="number"
        value={currentValue}
        onChange={handleInputChange}
        min="1000"
        step="100"
      />
      <label className="active" htmlFor="InputFullSalary">
        Salário Bruto
      </label>
    </div>
  );
}
