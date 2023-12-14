// Importa a biblioteca React
import React from "react";

// Importa o componente Tarefa de um arquivo local chamado "tarefas"
import Tarefa from "./tarefas";

// Define o componente ListaTarefas, responsável por exibir a lista de tarefas
const ListaTarefas = ({ tarefas, onDelete, onToggleConcluido }) => {
  return (
    <div>
      {/* Mapeia cada tarefa recebida como propriedade e renderiza o componente Tarefa para cada uma */}
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa._id} // Usa o ID único da tarefa como chave (importante para otimização do React)
          tarefa={tarefa} // Passa a tarefa como propriedade para o componente Tarefa
          onDelete={onDelete} // Passa a função onDelete para exclusão da tarefa como propriedade
          onToggleConcluido={onToggleConcluido} // Passa a função onToggleConcluido para alternar a conclusão da tarefa
        />
      ))}
    </div>
  );
};

// Exporta o componente ListaTarefas para ser utilizado em outros lugares
export default ListaTarefas;
