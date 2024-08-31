import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';
import Node from './Node';
import Edge from './Edge';
import './GraphEditor.module.scss';

const GraphEditor = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [draggingNode, setDraggingNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null); // Для хранения выделенного ребра
  const [shiftPressed, setShiftPressed] = useState(false);

  const generateNodeLabel = () => {
    const existingLabels = nodes.map(node => node.label);
    let newLabel;
    let count = 1;

    do {
      newLabel = `Node ${count}`;
      count++;
    } while (existingLabels.includes(newLabel));

    return newLabel;
  };

  const addNode = (x, y) => {
    const newNode = { id: uuidv4(), x, y, label: generateNodeLabel() };
    setNodes([...nodes, newNode]);
  };

  const addEdge = (fromId, toId) => {
    if (edges.some(edge => (edge.from === fromId && edge.to === toId) || (edge.from === toId && edge.to === fromId))) {
      return;
    }
    const newEdge = { id: uuidv4(), from: fromId, to: toId, weight: 1 };
    setEdges([...edges, newEdge]);
  };

  const handleCanvasClick = (e) => {
    if (!e.target.attrs.id) {
      setSelectedNode(null); // Сбрасываем выделение
      setSelectedEdge(null); // Сбрасываем выделение ребра
    }
  };

  const handleCanvasDblClick = (e) => {
    if (e.target.attrs.id === undefined) {
      const { x, y } = e.target.getStage().getPointerPosition();
      addNode(x, y); // Создаем вершину
    }
  };

  const handleNodeClick = (node, e) => {
    e.cancelBubble = true; // Предотвращаем всплытие события
    if (shiftPressed) {
      if (selectedNode) {
        addEdge(selectedNode.id, node.id); // Создаем ребро
      }
      setSelectedNode(node); // Устанавливаем выбранную вершину
    } else {
      setSelectedNode(node); // Устанавливаем выбранную вершину
    }
  };

  const handleEdgeClick = (edge, e) => {
    e.cancelBubble = true; // Предотвращаем всплытие события
    setSelectedEdge(edge); // Устанавливаем выделенное ребро
  };

  const handleNodeDragStart = (node) => {
    setDraggingNode(node);
    setSelectedNode(node); // Выделяем вершину при начале перетаскивания
  };

  const handleNodeDragEnd = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setNodes(nodes.map(node => node.id === draggingNode.id ? { ...node, x, y } : node));
    setDraggingNode(null); // Сбрасываем состояние перетаскиваемой вершины
  };

  const isNodeSelectedOrDragging = (node) => {
    return selectedNode && selectedNode.id === node.id || draggingNode && draggingNode.id === node.id;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Shift') {
      setShiftPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Shift') {
      setShiftPressed(false);
    }
  };

  const deleteSelectedNode = () => {
    if (selectedNode) {
      // Удаляем выделенную вершину и все ребра, связанные с ней
      setNodes(nodes.filter(node => node.id !== selectedNode.id));
      setEdges(edges.filter(edge => edge.from !== selectedNode.id && edge.to !== selectedNode.id));
      setSelectedNode(null); // Сбрасываем выделение
    }
  };

  const deleteSelectedEdge = () => {
    if (selectedEdge) {
      // Удаляем выделенное ребро
      setEdges(edges.filter(edge => edge.id !== selectedEdge.id));
      setSelectedEdge(null); // Сбрасываем выделение
    }
  };

  return (
    <div className="graph-editor" tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <button onClick={deleteSelectedNode} disabled={!selectedNode}>
        Удалить выделенную вершину
      </button>
      <button onClick={deleteSelectedEdge} disabled={!selectedEdge}>
        Удалить выделенное ребро
      </button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
        onDblClick={handleCanvasDblClick}
      >
        <Layer>
          {edges.map(edge => {
            const fromNode = nodes.find(node => node.id === edge.from);
            const toNode = nodes.find(node => node.id === edge.to);
            return (
              <Edge
                key={edge.id}
                fromNode={fromNode}
                toNode={toNode}
                isSelected={selectedEdge && selectedEdge.id === edge.id} // Проверяем, выделено ли ребро
                onClick={(e) => handleEdgeClick(edge, e)} // Передаем событие клика
              />
            );
          })}
          {nodes.map(node => (
            <Node
              key={node.id}
              node={node}
              isSelected={isNodeSelectedOrDragging(node)}
              onClick={(e) => handleNodeClick(node, e)} // Передаем событие клика
              onDragStart={() => handleNodeDragStart(node)}
              onDragEnd={handleNodeDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default GraphEditor;