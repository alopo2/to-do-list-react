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

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
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
                                <div
                                    key={index}
                                    className={item.isCompleted ? "item completo" : "item"}
                                >
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>
                                    <button onClick={() => { deleta(index) }} className="del">Deletar</button>
                                </div>
                            ))
                    }
                </div>
                <button className="deleteAll">Deletar Todas</button>
            </div>
        </div>

    )
}

export default TodoList