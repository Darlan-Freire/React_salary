import React, { useState } from 'react';
import { calculateSalaryFrom } from './components/salary';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProportionBar from './components/ProportionBar';

export default function App() {
  const [fullSalary, setFullSalary] = useState(1000);

  //Definição de cores para a barra de indicação
  const COLOR_INSS = '#e67e22';
  const COLOR_IRPF = '#c0370f';
  const COLOR_NET_SALARY = '#16a085';

  const handleFullSalaryChange = (valor) => {
    setFullSalary(valor);
  };

  //Passando o valor que está no estado fullSalary, para a função de calculo salário
  const salaryObject = calculateSalaryFrom(fullSalary);

  //Desestruturação do objeto => salaryOnject
  const {
    baseINSS,
    baseIRPF,
    discountINSS,
    discountIRPF,
    netSalary,
    percentINSS,
    percentIRPF,
    percentNetSalary,
  } = salaryObject;

  return (
    <div className="container center">
      <h1>React Salário</h1>
      <div className="row">
        <InputFullSalary
          currentValue={fullSalary}
          onSalaryChange={handleFullSalaryChange}
        />
      </div>
      <div className="row">
        <InputReadOnly label="Base INSS" value={baseINSS} />

        <InputReadOnly
          label="Desconto INSS"
          value={discountINSS}
          percentage={percentINSS}
          color={COLOR_INSS}
        />
        <InputReadOnly label="Base IRPF" value={baseIRPF} />
        <InputReadOnly
          label="Desconto IRPF"
          value={discountIRPF}
          percentage={percentIRPF}
          color={COLOR_IRPF}
        />
        <InputReadOnly
          label="Salário Líquido"
          value={netSalary}
          percentage={percentNetSalary}
          color={COLOR_NET_SALARY}
        />
      </div>
      <ProportionBar
        inss={percentINSS}
        irpf={percentIRPF}
        netSalary={percentNetSalary}
      />
    </div>
  );
}
