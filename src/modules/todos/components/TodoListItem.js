import React from 'react';


export default function TodoListItem({ onToggle, onDelete, item }) {
    function onItemClick() {
        onToggle(item.id);
    };

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        onDelete(item.id);
    };

    function getItemStyle(completed) {
        return {
            cursor: 'pointer',
            backgroundColor: completed ? 'green' : 'yellow',
        };
    };

    return (
        <li onClick={onItemClick} style={getItemStyle(item.completed)}>
            {item.title}
            <span onClick={onDeleteBtnClick}>X</span>
        </li>
    );
}