import React from "react";

const Tarefa = ({ tarefa, onDelete, onToggleConcluido }) => {
  return (
    <div>
      <span
        style={{ textDecoration: tarefa.concluido ? "line-through" : "none" }}
      >
        {tarefa.titulo}
      </span>

      <button onClick={() => onToggleConcluido(tarefa._id)}>Concluir</button>

      <button onClick={() => onDelete(tarefa._id)}>Excluir</button>
    </div>
  );
};

export default Tarefa;
