import React from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo, updateTodo } from '../store/actions/actions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos({list, dispatch}) {
    
    function toggleItem (id) {
        const item = list.find((l) => l.id === id);
        const newItem = { ...item, isDone: !item.isDone };
        dispatch(updateTodo(newItem));
    };

    function deleteItem (id) {
        dispatch(deleteTodo(id));
    };

    function createItem (newItem) {
        dispatch(createTodo(newItem));
    };

    return (
        <>
            <TodoList
                list={list}
                onToggle={toggleItem}
                onDelete={deleteItem}
            />
            <TodoForm onSave={createItem} />
        </>
    )
}

function mapsStateToProps(state) {
    return {list: state.list}
}

export default connect(mapsStateToProps)(Todos);