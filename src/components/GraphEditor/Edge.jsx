import React from 'react';
import { Line } from 'react-konva';

const Edge = ({ fromNode, toNode, isSelected, onClick }) => {
  return (
    <>
      <Line
        points={[fromNode.x, fromNode.y, toNode.x, toNode.y]}
        stroke={isSelected ? 'red' : 'black'} // Изменяем цвет при выделении
        strokeWidth={isSelected ? 3 : 1} // Увеличиваем толщину при выделении
        tension={0.5}
        onClick={onClick} // Добавляем обработчик клика
      />
      <Line
        points={[fromNode.x, fromNode.y, toNode.x, toNode.y]} // Невидимая область для клика
        stroke="transparent" // Делаем линию невидимой
        strokeWidth={10} // Увеличиваем толщину для клика
        onClick={onClick} // Добавляем обработчик клика
      />
    </>
  );
};

export default Edge;