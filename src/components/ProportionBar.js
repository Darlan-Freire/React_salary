import React from 'react';

export default function ProportionBar({
  inss,
  irpf,
  netSalary,
  colorINSS = '#e67e22',
  colorIRPF = '#c0370f',
  colorNetSalary = '#16a085',
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div
        style={{
          backgroundColor: colorINSS,
          width: inss + '%',
          height: '20px',
        }}
      />
      <div
        style={{
          backgroundColor: colorIRPF,
          width: irpf + '%',
          height: '20px',
        }}
      />
      <div
        style={{
          backgroundColor: colorNetSalary,
          width: netSalary + '%',
          height: '20px',
        }}
      />
    </div>
  );
}
