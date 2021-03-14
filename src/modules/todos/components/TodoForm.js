import React, { useState } from 'react';

export default function TodoForm({ onSave }) {
    const [todo, setList] = useState({title: ''});

    function onFormSubmit (e) {
        e.preventDefault();
        onSave(todo);
        setList({ title: '' } );
    };

    function onInputChange(e) {
        setList({ ...todo, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );
}
