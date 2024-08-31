import React from 'react';
import { Circle, Text } from 'react-konva';

const Node = ({ node, isSelected, onClick, onDragStart, onDragEnd, onLabelClick }) => {
  return (
    <>
      <Circle
        key={node.id}
        x={node.x}
        y={node.y}
        radius={20}
        fill={isSelected ? 'red' : 'blue'}
        draggable
        onClick={onClick}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
      <Text
        text={node.label}
        x={node.x - 10} // Центрируем текст относительно окружности
        y={node.y + 25} // Смещаем текст ниже окружности
        fontSize={12}
        fill="black"
        onClick={onLabelClick} // Обработчик клика на текст
      />
    </>
  );
};

export default Node;