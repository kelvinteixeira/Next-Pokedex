import React from 'react';

export const PokeStatus = ({ status }: any) => {
  const labels = ['HP', 'Ataque', 'Defesa', 'Ataque Especial', 'Defesa Especial', 'Velocidade'];

  return (
    <div className="grafico-status">
      {status.map((valor : number, index: number) => (
        <div key={labels[index]} className="status-bar flex flex-col ">
          <div className="status-label text-sm w-80 ">{labels[index]}</div>
          <div className="status-value text-sm" style={{ width: `${valor}%` }}>
            {valor}
          </div>
        </div>
      ))}
    </div>
  );
};
