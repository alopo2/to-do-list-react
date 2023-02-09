import React from "react";
import { useState } from "react";
import './TodoList.css';
import Icone from './assets/icon.webp';

function TodoList() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.prevent.default();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }
    return (
        <div>
            <h1>
                Lista de Tarefas
            </h1>
            <form onSubmit={adicionaItem}>
                <input
                    id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value) }}
                    placeholder="Adicione uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>

            <div className="listaTarefas">
                <div style={{ textAlign: 'center' }}>
                    {
                        lista.length < 1
                            ?
                            <img className="icone-central" src={Icone} />
                            :
                            lista.map((item, index) => (
                                <div className="item">
                                    <span>{item.text}</span>
                                    <button className="del">Deletar</button>
                                </div>
                            ))
                    }
                </div>

                <div className="item completo">
                    <span>Tarefa Concluída</span>
                    <button className="del">Deletar</button>
                </div>
                <button className="deleteAll">Deletar Todas</button>
            </div>
        </div>

    )
}

export default TodoList