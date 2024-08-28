import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown, FaEdit } from 'react-icons/fa';
import Draggable from 'react-draggable';
import styles from './NodeEditor.module.scss';

const NodeEditor = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [editingNode, setEditingNode] = useState(null);
  const [newNodeTitle, setNewNodeTitle] = useState('');
  const [newPropertyName, setNewPropertyName] = useState('');
  const [newPropertyValue, setNewPropertyValue] = useState('');

  // Создание новой ноды
  const createNode = () => {
    const newNode = { id: uuidv4(), title: 'New Node', position: { x: 0, y: 0 }, properties: {}, inputs: [], outputs: [] };
    setNodes([...nodes, newNode]);
  };

  // Удаление ноды
  const deleteNode = (id) => {
    setNodes(nodes.filter((node) => node.id !== id));
    setConnections(connections.filter((conn) => conn.source !== id && conn.target !== id));
  };

  // Начало редактирования ноды
  const startEditingNode = (node) => {
    setEditingNode(node);
    setNewNodeTitle(node.title);
  };

  // Сохранение изменений ноды
  const saveNodeChanges = (id) => {
    const updatedNodes = nodes.map((node) =>
      node.id === id ? { ...node, title: newNodeTitle } : node
    );
    setNodes(updatedNodes);
    setEditingNode(null);
  };

  // Обработка перемещения ноды
  const handleDrag = (e, data, nodeId) => {
    const updatedNodes = nodes.map((node) =>
      node.id === nodeId ? { ...node, position: { x: data.x, y: data.y } } : node
    );
    setNodes(updatedNodes);
  };

  // Добавление нового свойства к ноде
  const addPropertyToNode = (nodeId) => {
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          properties: {
            ...node.properties,
            [newPropertyName]: newPropertyValue,
          },
        };
      }
      return node;
    });
    setNodes(updatedNodes);
    setNewPropertyName('');
    setNewPropertyValue('');
  };

  // Отображение нод и связей
  return (
    <div className={styles.nodeEditor}>
      <div className={styles.toolbar}>
        <button className={styles.toolbarButton} onClick={createNode}>
          <FaPlus />
          Add Node
        </button>
      </div>
      <div className={styles.workspace}>
        {nodes.map((node) => (
          <Draggable
            key={node.id}
            position={node.position}
            onDrag={(e, data) => handleDrag(e, data, node.id)}
          >
            <div className={styles.node}>
              <div className={styles.nodeHeader}>
                {editingNode && editingNode.id === node.id ? (
                  <input
                    id={`node-title-${node.id}`}
                    type="text"
                    value={newNodeTitle}
                    onChange={(e) => setNewNodeTitle(e.target.value)}
                    onBlur={() => saveNodeChanges(node.id)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        saveNodeChanges(node.id);
                      }
                    }}
                  />
                ) : (
                  <h3>{node.title}</h3>
                )}
                <div className={styles.nodeActions}>
                  <button className={styles.actionButton} onClick={() => deleteNode(node.id)}>
                    <FaTrash />
                  </button>
                  <button className={styles.actionButton} onClick={() => startEditingNode(node)}>
                    <FaEdit />
                  </button>
                </div>
              </div>
              <div className={styles.nodeContent}>
                <div>
                  <h4>Properties:</h4>
                  <ul>
                    {Object.entries(node.properties).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '10px' }}> {/* Отступ сверху для кнопки добавления свойства */}
                  <input
                    id={`property-name-${node.id}`}
                    type="text"
                    placeholder="Property Name"
                    value={newPropertyName}
                    onChange={(e) => setNewPropertyName(e.target.value)}
                  />
                  <input
                    id={`property-value-${node.id}`}
                    type="text"
                    placeholder="Property Value"
                    value={newPropertyValue}
                    onChange={(e) => setNewPropertyValue(e.target.value)}
                  />
                  <button onClick={() => addPropertyToNode(node.id)}>Add Property</button>
                </div>
              </div>
            </div>
          </Draggable>
        ))}
        {connections.map((conn, index) => (
          <div key={index} className={styles.connection}>
            {/* Отображение связи */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeEditor;