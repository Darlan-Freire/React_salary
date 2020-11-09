import React from 'react';
import { formatMoney, formatPercentage } from './formatters';

export default function InputReadOnly({
  color = 'black',
  value,
  percentage = 0,
  label,
}) {
  //Formatando os valores para 2 casa decimais e no formato BRL
  const formattedPercentage =
    percentage > 0 ? `${formatPercentage(percentage)}` : '';
  const formattedValue = `${formatMoney(value)}  ${formattedPercentage}`;

  //Diferenciando os id's para o React não reclamar
  const id = 'input' + label;

  return (
    <div className="input-field col s12 m6 l3">
      <input
        id={id}
        value={formattedValue}
        style={{ color: color, fontWeight: 'bold' }}
        readOnly
      />
      <label className="active" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
