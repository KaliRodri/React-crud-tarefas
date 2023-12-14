import React, { useState, useEffect } from "react";
import ListaTarefas from "./components/ListaTarefas";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(() => {
    axios
      .get("/tarefas")
      .then((response) => setTarefas(response.data))
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, []);

  const adicionarTarefa = () => {
    axios
      .post("/tarefas", { titulo: novaTarefa })
      .then((response) => setTarefas([...tarefas, response.data]))
      .catch((error) => console.error("Erro ao adicionar tarefa:", error));
  };

  const excluirTarefa = (id) => {
    axios
      .delete(`/tarefas/${id}`)
      .then(() => setTarefas(tarefas.filter((tarefa) => tarefa._id !== id)))
      .catch((error) => console.error("Erro ao excluir tarefa:", error));
  };

  const toggleConcluido = (id) => {
    axios
      .put(`/tarefas/${id}`, {
        concluida: !tarefas.find((tarefa) => tarefa._id === id).concluida,
      })
      .then((response) =>
        setTarefas(
          tarefas.map((tarefa) => (tarefa._id === id ? response.data : tarefa))
        )
      )
      .catch((error) => console.error("Erro ao atualizar tarefa:", error));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>

      <ListaTarefas
        tarefas={tarefas}
        onDelete={(id) => excluirTarefa(id)}
        onToggleConcluido={(id) => toggleConcluido(id)}
      />

      <div>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
    </div>
  );
};

export default App;
