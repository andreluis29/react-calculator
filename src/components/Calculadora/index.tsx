import React from "react";
import Button from '../Button/';
import './style.scss';

export default function Calculadora() {
  const calculatorNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '='];
  return (
    <div className="calculator">
      <input type="text" disabled/>
      {
        calculatorNumber.map((element, index) => {
          if (typeof(element) === 'string') {
            return <Button number={ -1 } letter={element} />
          }
          return <Button number={element} letter="" />
        })
      }
    </div>
  );
};