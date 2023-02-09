import React from "react";
import './TodoList.css';

function TodoList() {
    return (
        <div>
            <h1>
                Lista de Tarefas
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>

            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de Exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa Concluída</span>
                    <button className="del">Deletar</button>
                </div>
            </div>
        </div>

    )
}

export default TodoList