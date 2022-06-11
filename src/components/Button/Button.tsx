import React, { useEffect, useRef } from "react";
import './style.scss';

export default function Button(props: { number: string, estadoPai: any }) {
  const { number, estadoPai } = props;
  const { setNumerosEstado } = estadoPai;
  return (
    <div className="button" onClick={
      () => {
        setNumerosEstado({ number: number });
      }
    } > { number } </div>
  );
}